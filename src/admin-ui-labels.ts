/**
 * Slovak labels/descriptions + a nicer edit-view grid for the Content Manager.
 *
 * This only affects how fields are *displayed* in the admin panel (label,
 * help text, field width/grouping). It never touches attribute names, so the
 * Strapi API response shape (and the frontend contract in web/types) is
 * unaffected — see src/index.ts bootstrap() for where this gets applied.
 */

/** Field name → Slovak label, shared across every content type/component. */
export const FIELD_LABELS: Record<string, string> = {
  title: "Titulok",
  name: "Názov",
  slug: "URL adresa (slug)",
  description: "Popis",
  content: "Obsah",
  body: "Text",
  date: "Dátum",
  address: "Adresa",
  city: "Mesto / PSČ",
  phone: "Telefón",
  email: "E-mail",
  photo: "Fotografia",
  image: "Obrázok",
  images: "Fotografie",
  gallery: "Fotogaléria",
  rector: "Farár / správca",
  type: "Typ",
  order: "Poradie",
  latitude: "Zemepisná šírka",
  longitude: "Zemepisná dĺžka",
  announcementsUrl: "Odkaz na oznamy",
  eyebrow: "Malý nadpis nad titulkom",
  heroEyebrow: "Malý nadpis nad titulkom",
  heroTitle: "Hlavný titulok",
  heroImage: "Úvodná fotografia",
  subtitle: "Podnadpis",
  href: "Odkaz (URL)",
  ctaUrl: "Odkaz (URL)",
  ctaLabel: "Text tlačidla",
  label: "Text",
  style: "Vizuálny štýl",
  icon: "Ikona",
  limit: "Počet položiek",
  linkLabel: "Text odkazu „zobraziť všetky“",
  locations: "Kontaktné miesta",
  sections: "Sekcie obsahu",
  seo: "SEO nastavenia",
  iban: "IBAN (číslo účtu)",
  tags: "Krátke štítky",
  hours: "Otváracie hodiny",
  dayLabel: "Deň / dni",
  time: "Čas",
  times: "Časy omší",
  language: "Jazyk",
  massSchedule: "Rozpis bohoslužieb",
  about: "O tomto mieste",
  reverse: "Otočiť poradie (obrázok vľavo)",
  tinted: "Farebné pozadie sekcie",
  note: "Poznámka",
  location: "Miesto",
  schedule: "Rozpis časov",
  items: "Položky",
  question: "Otázka",
  answer: "Odpoveď",
  metaTitle: "SEO titulok (meta title)",
  metaDescription: "SEO popis (meta description)",
  ogImage: "Obrázok pre zdieľanie (social)",
  noIndex: "Skryť pred vyhľadávačmi",
  siteName: "Názov webu",
  siteTagline: "Krátky podnadpis",
  footerTagline: "Text v pätičke",
  diocese: "Arcidiecéza",
  hero: "Úvodná hero sekcia",
  quickLinks: "Rýchle odkazy (dlaždice s fotkou)",
  titleLine1: "Nadpis — 1. riadok",
  titleLine2: "Nadpis — 2. riadok",
  titleEmphasis: "Nadpis — zvýraznené slovo",
  ctaPrimary: "Hlavné tlačidlo",
  ctaSecondary: "Vedľajšie tlačidlo",
  cta: "Tlačidlo",
  meta: "Doplnkové riadky",
  preferredDate: "Preferovaný dátum",
  groupSize: "Počet osôb",
  message: "Správa",
  subject: "Predmet",
  status: "Stav",
  locale: "Jazyk záznamu",
  mainSquareUrl: "MainSquare odkaz (objednávky)",
  walletCardUrl: "Wallet karta — odkaz",
  qrCodeReservation: "QR kód — rezervácia",
  qrCodeWallet: "QR kód — wallet karta",
  heroTitleEmphasis: "Hlavný titulok — zvýraznené slovo",
  heroSubtitle: "Podnadpis pod hlavným titulkom",
  heroCtaPrimaryLabel: "Text hlavného tlačidla",
  heroCtaSecondaryLabel: "Text vedľajšieho tlačidla",
  stats: "Štatistiky (panel s číslami)",
  value: "Hodnota",
  martineumEyebrow: "Martineum — malý nadpis",
  martineumTitle: "Martineum — titulok",
  martineumBody: "Martineum — text",
  martineumAwards: "Martineum — ocenenia",
  martineumImages: "Martineum — fotografie",
  servicesEyebrow: "Služby — malý nadpis",
  servicesTitle: "Služby — titulok",
  services: "Služby (karty s ikonou)",
  journeyEyebrow: "Cesta návštevníka — malý nadpis",
  journeyTitle: "Cesta návštevníka — titulok",
  journeySteps: "Cesta návštevníka — kroky",
  cellarsEyebrow: "Pivnice — malý nadpis",
  cellarsTitle: "Pivnice — titulok",
  cellarsBody: "Pivnice — text",
  cellarsImage: "Pivnice — fotografia",
  cellarsCtaLabel: "Pivnice — text tlačidla",
  practicalEyebrow: "Praktické info — malý nadpis",
  practicalTitle: "Praktické info — titulok",
  tickets: "Cenník vstupného",
  price: "Cena",
  reservationTitle: "Rezervácia — titulok",
  reservationBody: "Rezervácia — text",
  reservationCtaLabel: "Rezervácia — text tlačidla",
  restrictionsEyebrow: "Pravidlá — malý nadpis",
  restrictionsTitle: "Pravidlá — titulok",
  restrictions: "Zoznam pravidiel",
  text: "Text",
  timelineEyebrow: "Časová os — malý nadpis",
  timelineTitle: "Časová os — titulok",
  timelineEvents: "Časová os — udalosti",
  year: "Rok",
  coronationsEyebrow: "Korunovácie — malý nadpis",
  coronationsTitle: "Korunovácie — titulok",
  coronationsBody: "Korunovácie — text",
  coronationsListLabel: "Korunovácie — nadpis zoznamu panovníkov",
  coronationsKings: "Zoznam korunovaných panovníkov",
  historyEyebrow: "Príbeh stavby — malý nadpis",
  historyTitle: "Príbeh stavby — titulok",
  historyBody: "Príbeh stavby — text",
  historyImages: "Príbeh stavby — fotografie",
  chapelEyebrow: "Kaplnka — malý nadpis",
  chapelTitle: "Kaplnka — titulok",
  chapelBody: "Kaplnka — text",
  chapelImage: "Kaplnka — fotografia",
  kapitulskaEyebrow: "Kapitulská ulica — malý nadpis",
  kapitulskaTitle: "Kapitulská ulica — titulok",
  kapitulskaBody: "Kapitulská ulica — text",
  kapitulskaImages: "Kapitulská ulica — fotografie",
  todayEyebrow: "Katedrála dnes — malý nadpis",
  todayTitle: "Katedrála dnes — titulok",
  todayBody: "Katedrála dnes — text",
  todayCtaPrimaryLabel: "Katedrála dnes — text hlavného tlačidla",
  todayCtaSecondaryLabel: "Katedrála dnes — text vedľajšieho tlačidla",
  category: "Kategória (farba v kalendári)",
  timeFrom: "Čas od",
  timeTo: "Čas do",
};

/** Per-content-type/component overrides where the same field name means something more specific. */
export const FIELD_LABEL_OVERRIDES: Record<string, Record<string, string>> = {
  "shared.contact-location": {
    slug: "Kľúč pre frontend (slug)",
    description: "Popis miesta",
  },
  "sections.faq": {
    items: "Zoznam otázok",
  },
  "sections.quick-nav": {
    items: "Dlaždice",
  },
  "api::concert.concert": {
    date: "Dátum a čas",
  },
};

function prettyFallback(name: string): string {
  return name
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/^./, (c) => c.toUpperCase());
}

export function labelFor(uid: string, field: string): string {
  return FIELD_LABEL_OVERRIDES[uid]?.[field] ?? FIELD_LABELS[field] ?? prettyFallback(field);
}

/** How wide a field should be in the 12-column edit grid, based on its data type. */
export function sizeForAttribute(attr: { type?: string } | undefined): number {
  switch (attr?.type) {
    case "text":
    case "richtext":
    case "json":
    case "media":
    case "component":
    case "dynamiczone":
      return 12;
    case "boolean":
      return 4;
    default:
      return 6;
  }
}

type LayoutField = { name: string; size: number };

/**
 * Re-chunks Strapi's own (already-filtered) default field order into a
 * denser grid — short fields pair up two-per-row instead of Strapi's
 * default of one full-width field per row.
 */
export function buildLayoutRows(
  attributes: Record<string, { type?: string } | undefined>,
  defaultEditLayout: LayoutField[][],
): LayoutField[][] {
  const fieldNames = defaultEditLayout.flat().map((field) => field.name);
  const rows: LayoutField[][] = [];
  let row: LayoutField[] = [];
  let rowWidth = 0;

  for (const name of fieldNames) {
    const size = sizeForAttribute(attributes[name]);

    if (size === 12) {
      if (row.length) {
        rows.push(row);
        row = [];
        rowWidth = 0;
      }
      rows.push([{ name, size }]);
      continue;
    }

    if (rowWidth + size > 12) {
      rows.push(row);
      row = [];
      rowWidth = 0;
    }
    row.push({ name, size });
    rowWidth += size;
  }
  if (row.length) rows.push(row);

  return rows;
}
