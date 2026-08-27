// Types for the message dictionaries. The JSON files are loaded untyped
// (getDictionary returns Record<string, unknown>); cast to these at the load site:
//   const t = (await getDictionary(locale, "common")) as unknown as CommonMessages;
//
// Types only — safe to `import type` from client components (fully erased at build,
// so it never pulls the server-only loader into a client bundle).

export type CommonMessages = {
  brand: {
    /** Latin wordmark — rendered in the Logo, copyright, and Header aria-label. */
    name: string;
    /**
     * Brand name for page `<title>` tags and SEO. Native script per locale
     * (fa: «افق زمین») so titles rank for Persian-script searches; en/ar keep Latin.
     */
    seoName: string;
    tagline: string;
  };
  nav: {
    home: string;
    products: string;
    about: string;
    blog: string;
    contact: string;
  };
  actions: {
    getQuote: string;
    viewProducts: string;
    contactUs: string;
  };
  footer: {
    description: string;
    headings: {
      products: string;
      company: string;
      contact: string;
    };
    /** Label for the WhatsApp contact line in the footer. */
    whatsapp: string;
    rights: string;
    language: string;
  };
};

export type HomeMessages = {
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
  };
  featured: {
    eyebrow: string;
    title: string;
    subtitle: string;
    viewAll: string;
    /** Unit noun for the per-category product count, e.g. "products". */
    products: string;
  };
  suggested: {
    eyebrow: string;
    title: string;
    subtitle: string;
    viewAll: string;
  };
  cta: {
    title: string;
    subtitle: string;
    button: string;
  };
};

export type ProductsMessages = {
  meta: {
    title: string;
    description: string;
  };
  landing: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  categories: {
    title: string;
    subtitle: string;
  };
  suggested: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  breadcrumb: {
    home: string;
    products: string;
  };
  /** Count noun for per-category product totals, e.g. "products". */
  productsUnit: string;
  category: {
    /** Small label above the product grid on a category page. */
    overview: string;
    /** Empty state shown when a category has no products yet. */
    empty: string;
  };
  /** Single-product detail page. */
  detail: {
    /** Heading above the specifications table. */
    specs: string;
    /** Heading above the related-products grid. */
    related: string;
    /** Link to the parent category from the related section. */
    viewAll: string;
    /** Closing enquiry CTA band. */
    enquiry: {
      title: string;
      subtitle: string;
      button: string;
    };
  };
};

export type BlogMessages = {
  meta: {
    title: string;
    description: string;
  };
  landing: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  /** Shown on the index while there are no published posts. */
  empty: {
    title: string;
    subtitle: string;
  };
  breadcrumb: {
    home: string;
    blog: string;
  };
  /** Card CTA linking into a post. */
  readMore: string;
  /** Back-link from a post to the index. */
  backToBlog: string;
};

export type AboutMessages = {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  story: {
    title: string;
    /** Ordered body paragraphs. */
    body: string[];
  };
  values: {
    title: string;
    items: { title: string; body: string }[];
  };
  cta: {
    title: string;
    subtitle: string;
    primary: string;
    secondary: string;
  };
  breadcrumb: {
    home: string;
    about: string;
  };
};

export type ContactMessages = {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  details: {
    title: string;
    emailLabel: string;
    phoneLabel: string;
    mobileLabel: string;
    whatsappLabel: string;
    /** Note that the WhatsApp number is also on Rubika, Eitaa and Bale. */
    messagingNote: string;
    hoursLabel: string;
    hours: string;
  };
  form: {
    title: string;
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    company: string;
    companyPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    /** Suffix marking an optional field. */
    optional: string;
    submit: string;
    /** Button label while the (stubbed) submit is in flight. */
    submitting: string;
  };
  validation: {
    nameRequired: string;
    emailRequired: string;
    emailInvalid: string;
    messageRequired: string;
  };
  success: {
    title: string;
    body: string;
    /** Reset link to send another enquiry. */
    again: string;
  };
  breadcrumb: {
    home: string;
    contact: string;
  };
};
