import type { Schema, Struct } from '@strapi/strapi';

export interface LayoutCoronationKing extends Struct.ComponentSchema {
  collectionName: 'components_layout_coronation_kings';
  info: {
    description: 'Jeden riadok v zozname korunovan\u00FDch panovn\u00EDkov (meno + rok)';
    displayName: 'Korunovan\u00FD panovn\u00EDk';
    icon: 'crown';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    year: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutFooterColumn extends Struct.ComponentSchema {
  collectionName: 'components_layout_footer_columns';
  info: {
    description: "Jeden st\u013Apec odkazov vo footeri (napr. 'Farnos\u0165', 'N\u00E1v\u0161teva', '\u010Eal\u0161ie')";
    displayName: 'St\u013Apec vo footeri';
    icon: 'bulletList';
  };
  attributes: {
    links: Schema.Attribute.Component<'layout.nav-link', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_hero_sections';
  info: {
    description: 'Celostr\u00E1nkov\u00FD hero banner so slideshow efektom (homepage)';
    displayName: 'Hero sekcia (\u00FAvodn\u00E1 fotka)';
    icon: 'picture';
  };
  attributes: {
    ctaPrimary: Schema.Attribute.Component<'shared.cta', false>;
    ctaSecondary: Schema.Attribute.Component<'shared.cta', false>;
    eyebrow: Schema.Attribute.String;
    images: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
    subtitle: Schema.Attribute.Text;
    titleEmphasis: Schema.Attribute.String & Schema.Attribute.Required;
    titleLine1: Schema.Attribute.String & Schema.Attribute.Required;
    titleLine2: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutJourneyStep extends Struct.ComponentSchema {
  collectionName: 'components_layout_journey_steps';
  info: {
    description: 'Jeden o\u010D\u00EDslovan\u00FD krok v sekcii \u201ECesta n\u00E1v\u0161tevn\u00EDka\u201C na str\u00E1nke N\u00E1v\u0161teva';
    displayName: 'Krok cesty n\u00E1v\u0161tevn\u00EDka';
    icon: 'arrowRight';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutNavLink extends Struct.ComponentSchema {
  collectionName: 'components_layout_nav_links';
  info: {
    description: 'Jeden odkaz v hlavnej navig\u00E1cii alebo vo footeri';
    displayName: 'Naviga\u010Dn\u00FD odkaz';
    icon: 'link';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    icon: Schema.Attribute.String;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutQuickLink extends Struct.ComponentSchema {
  collectionName: 'components_layout_quick_links';
  info: {
    description: 'Ikona + odkaz (quick nav tile alebo homepage quick link karta)';
    displayName: 'Odkaz s ikonou';
    icon: 'grid';
  };
  attributes: {
    ctaLabel: Schema.Attribute.String;
    ctaUrl: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutQuickLinkCard extends Struct.ComponentSchema {
  collectionName: 'components_layout_quick_link_cards';
  info: {
    description: 'Homepage quick link karta s fotkou na pozad\u00ED (Katedr\u00E1la/Farnos\u0165/N\u00E1v\u0161teva/Kontakt)';
    displayName: 'Dla\u017Edica s fotkou';
    icon: 'grid';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutRecordingItem extends Struct.ComponentSchema {
  collectionName: 'components_layout_recording_items';
  info: {
    description: 'Jedna nahr\u00E1vka, CD alebo spevn\u00EDk v preh\u013Eade hudobn\u00FDch publik\u00E1ci\u00ED katedr\u00E1ly';
    displayName: 'Nahr\u00E1vka / publik\u00E1cia';
    icon: 'cd';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    photo: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    type: Schema.Attribute.String & Schema.Attribute.Required;
    year: Schema.Attribute.String;
  };
}

export interface LayoutRestrictionItem extends Struct.ComponentSchema {
  collectionName: 'components_layout_restriction_items';
  info: {
    description: 'Jedno pravidlo v zozname pravidiel a obmedzen\u00ED (emoji ikona + text)';
    displayName: 'Pravidlo / obmedzenie';
    icon: 'informationSquare';
  };
  attributes: {
    icon: Schema.Attribute.String & Schema.Attribute.Required;
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutStatItem extends Struct.ComponentSchema {
  collectionName: 'components_layout_stat_items';
  info: {
    description: 'Jedna polo\u017Eka v \u0161tatistickom paneli (napr. \u201E1452\u201C / \u201Erok zalo\u017Eenia katedr\u00E1ly\u201C)';
    displayName: '\u0160tatistika (\u010D\u00EDslo + popis)';
    icon: 'chartBubble';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutTicketRow extends Struct.ComponentSchema {
  collectionName: 'components_layout_ticket_rows';
  info: {
    description: 'Jeden riadok cenn\u00EDka vstupn\u00E9ho (napr. \u201EDospel\u00ED\u201C / \u201E5 \u20AC\u201C)';
    displayName: 'Riadok cenn\u00EDka';
    icon: 'priceTag';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    price: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutTimelineEvent extends Struct.ComponentSchema {
  collectionName: 'components_layout_timeline_events';
  info: {
    description: 'Jedna udalos\u0165 na \u010Dasovej osi hist\u00F3rie katedr\u00E1ly (rok + titulok + popis)';
    displayName: 'Udalos\u0165 na \u010Dasovej osi';
    icon: 'calendar';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    year: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutVenueFeature extends Struct.ComponentSchema {
  collectionName: 'components_layout_venue_features';
  info: {
    description: 'Jedna vlastnos\u0165/slu\u017Eba v r\u00E1mci priestoru Martinea (ikona-emoji + titulok + popis)';
    displayName: 'Vlastnos\u0165 priestoru Martinea';
    icon: 'grid';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutVenueSpace extends Struct.ComponentSchema {
  collectionName: 'components_layout_venue_spaces';
  info: {
    description: "Jeden prep\u00EDnate\u013En\u00FD priestor/poschodie v sekcii '\u010Co tu n\u00E1jdete' (napr. Informa\u010Dn\u00E9 centrum, MiniGal\u00E9ria, S\u00E1la, Caf\u00E9 Martineum)";
    displayName: 'Priestor Martinea';
    icon: 'layout';
  };
  attributes: {
    ctaHref: Schema.Attribute.String;
    ctaLabel: Schema.Attribute.String;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    features: Schema.Attribute.Component<'layout.venue-feature', true>;
    hours: Schema.Attribute.Component<'shared.hours-row', true>;
    image: Schema.Attribute.Media<'images'>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    slug: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsAnnouncementsPreview extends Struct.ComponentSchema {
  collectionName: 'components_sections_announcements_previews';
  info: {
    description: 'N\u00E1h\u013Ead najnov\u0161\u00EDch farsk\u00FDch oznamov (d\u00E1ta \u0165ahan\u00E9 z Announcement kolekcie, nie statick\u00E9)';
    displayName: 'N\u00E1h\u013Ead: Farsk\u00E9 oznamy';
    icon: 'bulletList';
  };
  attributes: {
    eyebrow: Schema.Attribute.String;
    limit: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 12;
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<3>;
    linkLabel: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsChurchesPreview extends Struct.ComponentSchema {
  collectionName: 'components_sections_churches_previews';
  info: {
    description: 'N\u00E1h\u013Ead kostolov a kaplniek (d\u00E1ta \u0165ahan\u00E9 z Church kolekcie, nie statick\u00E9)';
    displayName: 'N\u00E1h\u013Ead: Kostoly';
    icon: 'building';
  };
  attributes: {
    eyebrow: Schema.Attribute.String;
    limit: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 20;
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<4>;
    linkLabel: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsContacts extends Struct.ComponentSchema {
  collectionName: 'components_sections_contacts';
  info: {
    description: 'Blok kontaktn\u00FDch kariet (adresa/telef\u00F3n/email/foto)';
    displayName: 'Kontaktn\u00E9 karty';
    icon: 'pinMap';
  };
  attributes: {
    eyebrow: Schema.Attribute.String;
    locations: Schema.Attribute.Component<'shared.contact-location', true> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsCtaBanner extends Struct.ComponentSchema {
  collectionName: 'components_sections_cta_banners';
  info: {
    description: 'Zv\u00FDraznen\u00FD pruh s nadpisom a jedn\u00FDm tla\u010Didlom';
    displayName: 'Pruh s tla\u010Didlom';
    icon: 'bulletList';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.cta', false> &
      Schema.Attribute.Required;
    eyebrow: Schema.Attribute.String;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsFaq extends Struct.ComponentSchema {
  collectionName: 'components_sections_faqs';
  info: {
    description: 'Zoznam \u010Dasto kladen\u00FDch ot\u00E1zok';
    displayName: '\u010Cast\u00E9 ot\u00E1zky';
    icon: 'question';
  };
  attributes: {
    eyebrow: Schema.Attribute.String;
    items: Schema.Attribute.Component<'shared.faq-item', true> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsGallery extends Struct.ComponentSchema {
  collectionName: 'components_sections_galleries';
  info: {
    description: 'Mrie\u017Eka fotografi\u00ED';
    displayName: 'Fotogal\u00E9ria';
    icon: 'images';
  };
  attributes: {
    images: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface SectionsImageText extends Struct.ComponentSchema {
  collectionName: 'components_sections_image_texts';
  info: {
    description: 'Obr\u00E1zok + text + volite\u013En\u00E9 CTA a meta riadky (napr. Sob\u00E1\u0161, Krst, Ador\u00E1cia)';
    displayName: 'Obr\u00E1zok + text';
    icon: 'layout';
  };
  attributes: {
    body: Schema.Attribute.RichText & Schema.Attribute.Required;
    cta: Schema.Attribute.Component<'shared.cta', false>;
    eyebrow: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    meta: Schema.Attribute.Component<'shared.meta-row', true>;
    reverse: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    tinted: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsMassSchedule extends Struct.ComponentSchema {
  collectionName: 'components_sections_mass_schedules';
  info: {
    description: 'Rozpis bohoslu\u017Eieb s fotografiou (tmav\u00E1 sekcia na homepage)';
    displayName: 'Rozpis bohoslu\u017Eieb';
    icon: 'clock';
  };
  attributes: {
    eyebrow: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    location: Schema.Attribute.String;
    note: Schema.Attribute.Text;
    schedule: Schema.Attribute.Component<'shared.mass-time', true> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsQuickNav extends Struct.ComponentSchema {
  collectionName: 'components_sections_quick_navs';
  info: {
    description: 'Mrie\u017Eka ikona+odkaz dla\u017Ed\u00EDc (napr. sekcie Farnosti)';
    displayName: 'R\u00FDchle odkazy (dla\u017Edice)';
    icon: 'grid';
  };
  attributes: {
    eyebrow: Schema.Attribute.String;
    items: Schema.Attribute.Component<'layout.quick-link', true> &
      Schema.Attribute.Required;
  };
}

export interface SectionsRichText extends Struct.ComponentSchema {
  collectionName: 'components_sections_rich_texts';
  info: {
    description: 'Vo\u013En\u00FD textov\u00FD blok (napr. hist\u00F3ria, inform\u00E1cie)';
    displayName: 'Textov\u00FD blok';
    icon: 'align-left';
  };
  attributes: {
    body: Schema.Attribute.RichText & Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface SharedContactLocation extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_locations';
  info: {
    description: 'Jedna kontaktn\u00E1 lok\u00E1cia (adresa, telef\u00F3n, email, foto, hodiny)';
    displayName: 'Kontaktn\u00E9 miesto';
    icon: 'pinMap';
  };
  attributes: {
    accountHolderName: Schema.Attribute.String;
    address: Schema.Attribute.String & Schema.Attribute.Required;
    city: Schema.Attribute.String;
    description: Schema.Attribute.RichText;
    dic: Schema.Attribute.String;
    email: Schema.Attribute.Email;
    emergencyPhone: Schema.Attribute.String;
    hours: Schema.Attribute.Component<'shared.hours-row', true>;
    iban: Schema.Attribute.String;
    ico: Schema.Attribute.String;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    phone: Schema.Attribute.String;
    photo: Schema.Attribute.Media<'images'>;
    slug: Schema.Attribute.String;
    staff: Schema.Attribute.Component<'shared.staff-member', true>;
    tags: Schema.Attribute.String;
  };
}

export interface SharedCta extends Struct.ComponentSchema {
  collectionName: 'components_shared_ctas';
  info: {
    description: 'Tla\u010Didlo/odkaz s v\u00FDberom vizu\u00E1lneho \u0161t\u00FDlu';
    displayName: 'Tla\u010Didlo / odkaz';
    icon: 'cursor';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    style: Schema.Attribute.Enumeration<['primary', 'secondary', 'outline']> &
      Schema.Attribute.DefaultTo<'primary'>;
  };
}

export interface SharedFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_faq_items';
  info: {
    description: 'Jedna ot\u00E1zka a odpove\u010F';
    displayName: 'Ot\u00E1zka a odpove\u010F';
    icon: 'question';
  };
  attributes: {
    answer: Schema.Attribute.RichText & Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedHoursRow extends Struct.ComponentSchema {
  collectionName: 'components_shared_hours_rows';
  info: {
    description: 'Jeden riadok otv\u00E1rac\u00EDch hod\u00EDn (de\u0148/dni + \u010Das)';
    displayName: 'Riadok otv\u00E1rac\u00EDch hod\u00EDn';
    icon: 'clock';
  };
  attributes: {
    dayLabel: Schema.Attribute.String & Schema.Attribute.Required;
    note: Schema.Attribute.String;
    time: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedMassTime extends Struct.ComponentSchema {
  collectionName: 'components_shared_mass_times';
  info: {
    description: 'Riadok rozpisu bohoslu\u017Eieb (de\u0148/dni + \u010Dasy + jazyk)';
    displayName: 'Riadok rozpisu om\u0161\u00ED';
    icon: 'clock';
  };
  attributes: {
    dayLabel: Schema.Attribute.String & Schema.Attribute.Required;
    language: Schema.Attribute.Enumeration<['sk', 'en', 'hu']> &
      Schema.Attribute.DefaultTo<'sk'>;
    times: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedMetaRow extends Struct.ComponentSchema {
  collectionName: 'components_shared_meta_rows';
  info: {
    description: 'Riadok s ikonou a textom (napr. rozpis, lok\u00E1cia) pod textov\u00FDm obsahom sekcie';
    displayName: 'Riadok s ikonou';
    icon: 'list';
  };
  attributes: {
    icon: Schema.Attribute.Enumeration<
      [
        'clock',
        'map-pin',
        'phone',
        'mail',
        'scroll-text',
        'heart',
        'droplets',
        'book-open',
        'flame',
        'calendar',
        'users',
      ]
    > &
      Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: 'Meta tagy pre vyh\u013Ead\u00E1va\u010De a social preview';
    displayName: 'SEO nastavenia';
    icon: 'search';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
      }>;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    noIndex: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    ogImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedStaffMember extends Struct.ComponentSchema {
  collectionName: 'components_shared_staff_members';
  info: {
    description: 'Jeden duchovn\u00FD alebo pracovn\u00EDk p\u00F4sobiaci na kontaktnej lok\u00E1cii';
    displayName: 'Duchovn\u00FD / pracovn\u00EDk';
    icon: 'user';
  };
  attributes: {
    email: Schema.Attribute.Email;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    role: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'layout.coronation-king': LayoutCoronationKing;
      'layout.footer-column': LayoutFooterColumn;
      'layout.hero-section': LayoutHeroSection;
      'layout.journey-step': LayoutJourneyStep;
      'layout.nav-link': LayoutNavLink;
      'layout.quick-link': LayoutQuickLink;
      'layout.quick-link-card': LayoutQuickLinkCard;
      'layout.recording-item': LayoutRecordingItem;
      'layout.restriction-item': LayoutRestrictionItem;
      'layout.stat-item': LayoutStatItem;
      'layout.ticket-row': LayoutTicketRow;
      'layout.timeline-event': LayoutTimelineEvent;
      'layout.venue-feature': LayoutVenueFeature;
      'layout.venue-space': LayoutVenueSpace;
      'sections.announcements-preview': SectionsAnnouncementsPreview;
      'sections.churches-preview': SectionsChurchesPreview;
      'sections.contacts': SectionsContacts;
      'sections.cta-banner': SectionsCtaBanner;
      'sections.faq': SectionsFaq;
      'sections.gallery': SectionsGallery;
      'sections.image-text': SectionsImageText;
      'sections.mass-schedule': SectionsMassSchedule;
      'sections.quick-nav': SectionsQuickNav;
      'sections.rich-text': SectionsRichText;
      'shared.contact-location': SharedContactLocation;
      'shared.cta': SharedCta;
      'shared.faq-item': SharedFaqItem;
      'shared.hours-row': SharedHoursRow;
      'shared.mass-time': SharedMassTime;
      'shared.meta-row': SharedMetaRow;
      'shared.seo': SharedSeo;
      'shared.staff-member': SharedStaffMember;
    }
  }
}
