# CMS — Katedrála sv. Martina

Strapi 5 (obsahový systém). Kompletný postup nastavenia (lokálne aj
nasadenie) je v [`../README.md`](../README.md) v koreňovom priečinku projektu.

Detailná dokumentácia (content types, komponenty, bezpečnosť, i18n, webhook)
je v [`CLAUDE.md`](./CLAUDE.md).

## Rýchly štart

```bash
pnpm install
cp .env.example .env   # over hodnoty — komentáre v súbore vysvetlia každú
pnpm run develop
```

Admin panel beží na `http://localhost:1337/admin` (pri prvom spustení si
vypýta vytvorenie admin účtu). Obsahová databáza (`.tmp/data.db`) je súčasťou
repozitára, netreba nič zadávať odznova.
