# CMS — Strapi 5 (cms/)

Headless CMS pre obsah webu. Frontend (`web/`) konzumuje REST API výhradne cez `web/lib/api.ts` (server-only). Táto stránka je zdrojom pravdy pre presné Strapi schémy (komponenty, kolekcie, single types) — `web/CLAUDE.md` dokumentuje len frontendový kontrakt (TS typy, `lib/api.ts` funkcie, bezpečnosť).

## Tech stack

- Strapi 5 (Community edition), TypeScript
- SQLite (`better-sqlite3`) — vývoj/dev only; produkcia bude potrebovať Postgres/MySQL config v `config/database.ts`
- pnpm ako package manager

## Príkazy

```
pnpm run develop   ← dev server s watch módom (http://localhost:1337/admin)
pnpm run build     ← build admin panelu
pnpm run start     ← produkčný beh (bez watch)
```

## Folder structure

```
src/
  api/            ← content types: church, announcement, concert, event, page, reservation, excursion,
                     contact-message, homepage, parish-page, visit-page, contact-page, global
    <name>/
      content-types/<name>/schema.json
      controllers/<name>.ts   ← factories.createCoreController (boilerplate, no custom logic)
      routes/<name>.ts        ← factories.createCoreRouter
      services/<name>.ts      ← factories.createCoreService
  components/
    shared/       ← seo, cta, meta-row, mass-time, hours-row, contact-location, faq-item
    layout/       ← hero-section, quick-link, quick-link-card
    sections/     ← rich-text, image-text, cta-banner, gallery, faq, quick-nav,
                     mass-schedule, announcements-preview, churches-preview, contacts
  admin/          ← admin panel customizácie
  extensions/     ← rozšírenia core pluginov (napr. users-permissions)

config/
  database.ts     ← DB connection (sqlite v deve)
  plugins.ts      ← upload security, users-permissions config
  middlewares.ts  ← CORS allowlist cez FRONTEND_URLS env (pozri Bezpečnosť nižšie)
  api.ts          ← REST defaults: maxLimit 100, strictParams true
```

## Architektúra: reusable komponenty + dynamic zones

Namiesto samostatnej schémy pre každú "statickú" stránku (Kapitulská ulica, Martineum, Sprievodca, Audioguides, Exkurzia, Omša s kňazom, ...) existuje **jedna generická kolekcia `Page`** so `sections` dynamic zone poskladanou zo zdieľaných `sections.*` komponentov. Nová flexibilná stránka = nový záznam v `Page`, nie nová schéma ani nasadenie.

Rovnaký princíp platí aj pre `Homepage` a `ParishPage` — obe majú vlastné štrukturálne polia (napr. `hero` na Homepage) **plus** `sections` dynamic zone pre kompozovateľný obsah. Farnosť sekcie (Sobáš/Krst/Lectio divina/Adorácia) sú `sections.image-text` inštancie v `ParishPage.sections` — sú to sekcie na `/farnost`, nie samostatné podstránky (rozhodnutie z 2026-07 — pozri `web/CLAUDE.md` routing poznámku).

### Komponenty — `shared/` (univerzálne, používané naprieč všetkými content typmi)

| Komponent | Polia |
|---|---|
| `shared.seo` | metaTitle, metaDescription, ogImage (media), noIndex (bool) |
| `shared.cta` | label, href, style (enum: primary/secondary/outline) |
| `shared.meta-row` | icon (enum lucide-name), label |
| `shared.mass-time` | dayLabel, times (json string[]), language (enum sk/en/hu) |
| `shared.hours-row` | dayLabel, time — jeden riadok otváracích hodín |
| `shared.contact-location` | name, slug? (string, stabilný FE kľúč napr. pre mapové značky), address, city?, phone, email, hours (repeatable shared.hours-row), photo, description (richtext), iban, tags (json string[], len homepage kontaktné karty) |
| `shared.faq-item` | question, answer (richtext) |

### Komponenty — `layout/` (štrukturálne, jeden účel)

| Komponent | Polia |
|---|---|
| `layout.hero-section` | eyebrow, titleLine1, titleLine2, titleEmphasis (3 časti nadpisu — riadkovanie + tučné zvýraznenie), subtitle, images (media, multiple — 2+ fotky pre Ken Burns crossfade slideshow), ctaPrimary (shared.cta), ctaSecondary (shared.cta) |
| `layout.quick-link` | icon (string, lucide meno), title, description, ctaLabel, ctaUrl — používa sa v `sections.quick-nav` (Farnosť hub) |
| `layout.quick-link-card` | icon, title, image (media), href — homepage quick links karty s fotkou na pozadí (Katedrála/Farnosť/Návšteva/Kontakt) |

### Komponenty — `sections/` (dynamic-zone-eligible, kompozovateľný obsah)

| Komponent | Polia | Používa sa v |
|---|---|---|
| `sections.rich-text` | title?, body (richtext) | Page, ParishPage, VisitPage, ContactPage |
| `sections.image-text` | eyebrow, title, body (richtext), image, cta? (shared.cta), meta? (shared.meta-row[]), reverse (bool), tinted (bool) | Page, ParishPage, VisitPage |
| `sections.cta-banner` | eyebrow, title, subtitle, cta (shared.cta) | Page, VisitPage, ContactPage |
| `sections.gallery` | title?, images (media[]) | Page, VisitPage |
| `sections.faq` | eyebrow, title, items (shared.faq-item[]) | Page, ParishPage, VisitPage, ContactPage |
| `sections.quick-nav` | eyebrow, items (layout.quick-link[]) | ParishPage |
| `sections.mass-schedule` | eyebrow, title, location, note, schedule (shared.mass-time[]), image? | Homepage, Page |
| `sections.announcements-preview` | eyebrow, title, limit (int, default 3), linkLabel | Homepage, ParishPage — **dáta ťahané naživo z `Announcement`, nie statický obsah** |
| `sections.churches-preview` | eyebrow, title, limit (int, default 4), linkLabel | Homepage — dáta ťahané naživo z `Church` |
| `sections.contacts` | eyebrow, title, locations (shared.contact-location[]) | Homepage |

## Content types

### Collections

**Church** (`api::church.church`) — kostol aj kaplnka
```
name: string, required, localized
slug: uid (target name), localized
type: enum [kostol, kaplnka], required, NOT localized
address: string, localized
rector, email, phone: NOT localized
massSchedule: component repeatable shared.mass-time, localized
about: richtext, localized
photo: media (single), gallery: media (multiple) — NOT localized
announcementsUrl: string, NOT localized
latitude / longitude: decimal, NOT localized — pripravené pre budúcu mapu
order: integer, default 0, NOT localized — ručné zoradenie v listingu
seo: component shared.seo, localized
```

**Announcement** (`api::announcement.announcement`) — farské oznamy
```
title: string, required, localized
slug: uid (target title), localized
date: date, required, NOT localized
content: richtext, required, localized
seo: component shared.seo, localized
```

**Concert** (`api::concert.concert`) — koncerty
```
title: string, required, localized
slug: uid (target title), localized  ← nové oproti pôvodnému návrhu, pripravené pre detail stránky
date: datetime, required, NOT localized
description: richtext, localized
photo: media (single), NOT localized
seo: component shared.seo, localized
```

**Page** (`api::page.page`) — generická flexibilná stránka
```
title: string, required, localized
slug: uid (target title), localized
eyebrow: string, localized
heroImage: media (single), NOT localized
sections: dynamiczone [rich-text, image-text, cta-banner, gallery, faq, mass-schedule], localized
seo: component shared.seo, localized
```

**Event** (`api::event.event`) — udalosti pre kalendár na homepage (sväté omše, koncerty, sviatky, prehliadky, stretnutia...)
```
title: string, required, localized
date: date, required, NOT localized
description: text, localized
href: string, NOT localized — relatívna cesta na súvisiaci obsah (napr. /farnost/oznamy/15-nedela)
```

**Reservation / Excursion / ContactMessage** — archív odoslaní formulárov (ReservationForm/ExcursionForm/ContactForm), `draftAndPublish: false`, **bez i18n** (transakčné záznamy, nie editoriálny obsah — len plain `locale` string pole pre kontext). `status` enum na triedenie v adminovi. Zapisujú sa cez samostatný write-only token (pozri Bezpečnosť).

### Single types

**Homepage** — `hero` (layout.hero-section, required) + `quickLinks` (layout.quick-link-card repeatable — 4 karty s fotkou, štrukturálne pole mimo dynamic zone) + `sections` dynamic zone [announcements-preview, mass-schedule, churches-preview, contacts] + `seo`

**Global** (`api::global.global`) — celosite nastavenia
```
siteName: string, required, localized — napr. "Katedrála sv. Martina", používa Header aj Footer
siteTagline: string, localized — napr. "Bratislava"
footerTagline: text, localized — popisný text vo footeri pod logom
diocese: string, localized — napr. "Bratislavská arcidiecéza", spodný riadok footera
seo: component shared.seo, localized — fallback SEO pre stránky bez vlastného seo poľa
```
Navigácia (5 hlavných + footer odkazy) a ich `href`-y zostávajú **fixné v kóde** (`web/CLAUDE.md` Navigácia sekcia) — mení sa len obsah/text cez i18n, nie štruktúra. Kontaktné údaje vo footeri (adresa/telefón/email) sa pri napájaní na Strapi preberajú z `ContactPage.locations[0]`, nie z vlastného poľa — nekopíruj tie isté údaje na 2 miesta.

**ParishPage** (`/farnost`) — `heroEyebrow`, `heroTitle`, `heroImage` + `sections` dynamic zone [quick-nav, announcements-preview, image-text, rich-text, faq] + `seo`. Sobáš/Krst/Lectio divina/Adorácia = `image-text` položky v `sections`.

**VisitPage** (`/navsteva`) — `heroEyebrow`, `heroTitle`, `heroImage`, `mainSquareUrl`, `walletCardUrl`, `qrCodeReservation`, `qrCodeWallet` (MainSquare/QCode integrácia, pozri `web/CLAUDE.md`) + `sections` dynamic zone [rich-text, image-text, cta-banner, faq, gallery] + `seo`

**ContactPage** (`/kontakt`) — `heroEyebrow`, `heroTitle`, `locations` (shared.contact-location repeatable) + `sections` dynamic zone [rich-text, cta-banner, faq] + `seo`

Všetky content types majú `pluginOptions.i18n.localized: true` na úrovni typu; pri jednotlivých poliach je localized explicitne `false` tam, kde sa hodnota nemá prekladať (telefón, email, médiá, súradnice, poradie).

## Bezpečnosť

- **CORS**: `config/middlewares.ts` obmedzuje `strapi::cors` origin na `FRONTEND_URLS` (env, čiarkou oddelený zoznam). Nikdy nenastavuj na `*` v produkcii.
- **Token separation**: frontend používa **dva** API tokeny, nikdy jeden univerzálny:
  - `STRAPI_API_TOKEN` — typ **Read-only**, používaný na všetky GET requesty (`lib/api.ts` `fetchStrapi`).
  - `STRAPI_FORMS_TOKEN` — typ **Custom**, permissions **iba `create`** na `reservation`, `excursion`, `contact-message` — žiadny `find`/`findOne`/`update`/`delete`. Bez tohto oddelenia by kompromitovaný read token zároveň umožnil čítať cudzie rezervácie/kontaktné správy.
  - Vytvor v Settings → API Tokens. Hodnoty nikdy necommitovať — len v `.env` (negitované), vzor v `.env.example`.
- **Upload security** (`config/plugins.ts`) — `allowedTypes`/`deniedTypes` už obmedzujú nahrávané typy súborov (žiadne spustiteľné/skriptové typy).
- **Public role permissions** (Settings → Users & Permissions → Roles → Public) — treba nastaviť manuálne po prvom spustení:
  - `find` + `findOne`: `church`, `announcement`, `concert`, `event`, `page`, `homepage`, `parish-page`, `visit-page`, `contact-page`, `global`
  - `create` **only** (žiadne find): `reservation`, `excursion`, `contact-message` — a aj to len cez `STRAPI_FORMS_TOKEN`, nie cez anonymný Public prístup, ak je to možné obmedziť len na autentifikované API tokeny v produkcii.
  - Žiadny content type nesmie mať pre Public povolené `update`/`delete`.
- **Rate limiting** — Community edition nemá vstavaný rate limiter; pri produkčnom nasadení zvážiť reverse proxy (Nginx/Cloudflare) throttling pred `/api/*`, hlavne na `create` endpointy formulárov (ochrana pred spamom).
- **Richtext / XSS**: `richtext` polia (Announcement.content, Church.about, Concert.description, ...) sú markdown. Frontend ich **musí** renderovať cez `react-markdown` (žiadny `dangerouslySetInnerHTML`) — bezpečné voči injected HTML/skriptom by default.

## i18n — manuálne nastavenie (raz po prvom spustení)

Locales sa nezakladajú cez schému, ale cez admin: Settings → Internationalization
1. Over, že `sk` je nastavené ako default locale (Strapi ho typicky seeduje ako `en` — treba pridať `sk` a nastaviť ako default, príp. zmazať `en` a pridať nanovo v správnom poradí, alebo len explicitne zvoliť `sk` ako default v UI).
2. Pridaj `en` ako druhý locale.

## On-demand revalidation webhook

Settings → Webhooks → nový webhook pre každý content type (`church`, `announcement`, `concert`, `event`, `page`, `homepage`, `parish-page`, `visit-page`, `contact-page`, `global`):
- URL: `{FRONTEND_URL}/api/revalidate`
- Events: `Entry publish`, `Entry unpublish`, `Entry update`, `Entry delete`
- Header: `x-revalidate-secret: {REVALIDATE_SECRET}` (rovnaká hodnota ako `web/.env` `REVALIDATE_SECRET`)

Toto invaliduje Next.js ISR cache okamžite po publikovaní namiesto čakania na časový `revalidate` interval (pozri `web/CLAUDE.md` revalidačné časy — tie ostávajú ako fallback).

## Konvencie

- Každý content type má `locale` (i18n plugin zapnutý) — SK je default locale.
- API tokeny (`API_TOKEN_SALT`, `JWT_SECRET`, ...) sú v `.env` (negitované), vzor v `.env.example`.
- Media polia (`photo`, `gallery`, `qrCode*`) používajú Strapi Media Library — v produkcii zvážiť upload provider (S3/Cloudinary) namiesto lokálneho disku.
- Zmena schémy content typu = reštart `pnpm run develop` (auto-reload cez watch mode).
- Pridanie novej flexibilnej stránky (Kapitulská, Martineum, ...) = nový záznam v `Page` kolekcii cez admin, **nie** nová schéma.
