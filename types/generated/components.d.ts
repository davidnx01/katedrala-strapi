import type { Schema, Struct } from '@strapi/strapi';

export interface LayoutHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_hero_sections';
  info: {
    description: 'Celostr\u00E1nkov\u00FD hero banner so slideshow efektom (homepage)';
    displayName: 'Hero Section';
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

export interface LayoutQuickLink extends Struct.ComponentSchema {
  collectionName: 'components_layout_quick_links';
  info: {
    description: 'Ikona + odkaz (quick nav tile alebo homepage quick link karta)';
    displayName: 'Quick Link';
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
    displayName: 'Quick Link Card';
    icon: 'grid';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    icon: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsAnnouncementsPreview extends Struct.ComponentSchema {
  collectionName: 'components_sections_announcements_previews';
  info: {
    description: 'N\u00E1h\u013Ead najnov\u0161\u00EDch farsk\u00FDch oznamov (d\u00E1ta \u0165ahan\u00E9 z Announcement kolekcie, nie statick\u00E9)';
    displayName: 'Announcements Preview';
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
    displayName: 'Churches Preview';
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
    displayName: 'Contacts';
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
    displayName: 'CTA Banner';
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
    displayName: 'FAQ';
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
    displayName: 'Gallery';
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
    displayName: 'Image + Text';
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
    displayName: 'Mass Schedule';
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
    displayName: 'Quick Nav';
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
    displayName: 'Rich Text';
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
    displayName: 'Contact Location';
    icon: 'pinMap';
  };
  attributes: {
    address: Schema.Attribute.String & Schema.Attribute.Required;
    city: Schema.Attribute.String;
    description: Schema.Attribute.RichText;
    email: Schema.Attribute.Email;
    hours: Schema.Attribute.Component<'shared.hours-row', true>;
    iban: Schema.Attribute.String;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    phone: Schema.Attribute.String;
    photo: Schema.Attribute.Media<'images'>;
    slug: Schema.Attribute.String;
    tags: Schema.Attribute.JSON;
  };
}

export interface SharedCta extends Struct.ComponentSchema {
  collectionName: 'components_shared_ctas';
  info: {
    description: 'Tla\u010Didlo/odkaz s v\u00FDberom vizu\u00E1lneho \u0161t\u00FDlu';
    displayName: 'CTA';
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
    displayName: 'FAQ Item';
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
    displayName: 'Hours Row';
    icon: 'clock';
  };
  attributes: {
    dayLabel: Schema.Attribute.String & Schema.Attribute.Required;
    time: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedMassTime extends Struct.ComponentSchema {
  collectionName: 'components_shared_mass_times';
  info: {
    description: 'Riadok rozpisu bohoslu\u017Eieb (de\u0148/dni + \u010Dasy + jazyk)';
    displayName: 'Mass Time';
    icon: 'clock';
  };
  attributes: {
    dayLabel: Schema.Attribute.String & Schema.Attribute.Required;
    language: Schema.Attribute.Enumeration<['sk', 'en', 'hu']> &
      Schema.Attribute.DefaultTo<'sk'>;
    times: Schema.Attribute.JSON & Schema.Attribute.Required;
  };
}

export interface SharedMetaRow extends Struct.ComponentSchema {
  collectionName: 'components_shared_meta_rows';
  info: {
    description: 'Riadok s ikonou a textom (napr. rozpis, lok\u00E1cia) pod textov\u00FDm obsahom sekcie';
    displayName: 'Meta Row';
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
    displayName: 'SEO';
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

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'layout.hero-section': LayoutHeroSection;
      'layout.quick-link': LayoutQuickLink;
      'layout.quick-link-card': LayoutQuickLinkCard;
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
    }
  }
}
