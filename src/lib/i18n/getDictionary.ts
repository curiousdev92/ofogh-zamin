import "server-only"; // Ensures this never runs on the client
import { type Locale, type Namespace } from "./config";

// Dynamic imports — each combination is a separate chunk.
// Next.js will only fetch the chunk for the locale+namespace actually requested.
// A Farsi user visiting /blog never downloads en/blog.json or ar/blog.json.
const dictionaries: Record<Locale, Record<Namespace, () => Promise<Record<string, unknown>>>> = {
  en: {
    common: () => import("../../messages/en/common.json").then((m) => m.default),
    home: () => import("../../messages/en/home.json").then((m) => m.default),
    products: () => import("../../messages/en/products.json").then((m) => m.default),
    about: () => import("../../messages/en/about.json").then((m) => m.default),
    blog: () => import("../../messages/en/blog.json").then((m) => m.default),
    contact: () => import("../../messages/en/contact.json").then((m) => m.default),
  },
  fa: {
    common: () => import("../../messages/fa/common.json").then((m) => m.default),
    home: () => import("../../messages/fa/home.json").then((m) => m.default),
    products: () => import("../../messages/fa/products.json").then((m) => m.default),
    about: () => import("../../messages/fa/about.json").then((m) => m.default),
    blog: () => import("../../messages/fa/blog.json").then((m) => m.default),
    contact: () => import("../../messages/fa/contact.json").then((m) => m.default),
  },
  ar: {
    common: () => import("../../messages/ar/common.json").then((m) => m.default),
    home: () => import("../../messages/ar/home.json").then((m) => m.default),
    products: () => import("../../messages/ar/products.json").then((m) => m.default),
    about: () => import("../../messages/ar/about.json").then((m) => m.default),
    blog: () => import("../../messages/ar/blog.json").then((m) => m.default),
    contact: () => import("../../messages/ar/contact.json").then((m) => m.default),
  },
};

// Load a single namespace
export async function getDictionary(locale: Locale, namespace: Namespace) {
  return dictionaries[locale][namespace]();
}

// Load multiple namespaces at once (use Promise.all to parallelize)
export async function getDictionaries(locale: Locale, namespaces: Namespace[]) {
  const results = await Promise.all(namespaces.map((ns) => dictionaries[locale][ns]()));
  return Object.fromEntries(namespaces.map((ns, i) => [ns, results[i]]));
}
