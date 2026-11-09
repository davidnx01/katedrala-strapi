# CMS — Katedrála sv. Martina

Strapi 5 — obsahový systém (administrácia, kde sa upravuje text/foto pre
web). Detailná dokumentácia (content types, komponenty, bezpečnosť, i18n,
webhook) je v [`CLAUDE.md`](./CLAUDE.md).

Toto CMS je jedna polovica dvojice repozitárov — druhá je samotný web
(Next.js), ktorý z tohto CMS ťahá všetok obsah cez API:
**https://github.com/davidnx01/katedrala-web**

## Rýchly štart (lokálne)

Vyžaduje **Node.js 20+** a **pnpm** (`npm install -g pnpm`).

```bash
pnpm install
cp .env.example .env
```

Otvor `.env` a skontroluj hodnoty — každá premenná má v súbore komentár,
čo je a kam patrí. Pre lokálny beh netreba meniť nič, defaultné hodnoty
(SQLite databáza, CORS pre `localhost:3000`) už sedia.

```bash
pnpm run develop
```

Admin panel beží na `http://localhost:1337/admin` — pri prvom spustení si
vypýta vytvorenie admin účtu. Lokálna vývojová databáza (`.tmp/data.db`) **nie je
v gite** (je v `.gitignore`) a **nie je produkčná databáza** — zmeny v nej sa na
produkciu neprenesú. Obsah na produkcii (`api.katedralabratislava.sk`) sa spravuje
priamo v jeho administrácii.

Práva pre verejné čítanie obsahu (Public role) sa nastavujú **automaticky**
pri každom štarte Strapi — netreba nič klikať v administrácii.

## Nasadenie na produkciu

1. Nasaď ako bežný Node.js proces (`pnpm run build && pnpm run start`).
2. V `.env` na produkcii vygeneruj **vlastné** bezpečnostné kľúče (nikdy
   nepoužívaj hodnoty z `.env.example` ani skopírované z dev prostredia) —
   presný postup je priamo v `.env.example`.
3. `FRONTEND_URLS` nastav na skutočnú adresu webu (repozitár vyššie).
4. Databáza môže ostať SQLite (jednoduchšie, funguje) alebo prejsť na
   Postgres/MySQL — obe možnosti sú pripravené v `.env.example`, stačí
   odkomentovať.
5. V administrácii (Settings → Internationalization) over, že je nastavené
   `sk` ako predvolený jazyk a `en` ako druhý — viď `CLAUDE.md`.
6. Pre kontaktný formulár vytvor v administrácii API token `STRAPI_FORMS_TOKEN`
   (Settings → API Tokens, typ **Custom**, jediné právo `create` na
   `contact-message`) a jeho hodnotu daj do `.env` webu.
7. Webhook na obnovu webu zatiaľ netreba — web nepoužíva cache (každý request
   číta čerstvé dáta). Pri zavedení cache pribudne webhook podľa plánu v
   `web/CLAUDE.md`.

Pozn.: deploy tohto CMS je manuálny (`git pull`, `pnpm run build`, reštart Node
procesu) — push do `main` sám nič nenasadí.
