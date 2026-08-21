const DEFAULT_URL = "https://ofogh-zamin.vercel.app";
const envUrl = process.env.NEXT_PUBLIC_BASE_URL?.trim();

export const SITE = {
  name: "Ofogh Zamin",
  url: (envUrl && envUrl.length > 0 ? envUrl : DEFAULT_URL).replace(/\/+$/, ""),
  email: "ofoghzamin@gmail.com",
  phone: "+98 21 0000 0000",
} as const;
