// Types for the message dictionaries. The JSON files are loaded untyped
// (getDictionary returns Record<string, unknown>); cast to these at the load site:
//   const t = (await getDictionary(locale, "common")) as unknown as CommonMessages;
//
// Types only — safe to `import type` from client components (fully erased at build,
// so it never pulls the server-only loader into a client bundle).

export type CommonMessages = {
  brand: {
    name: string;
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
    rights: string;
    language: string;
  };
};
