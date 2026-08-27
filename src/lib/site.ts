const DEFAULT_URL = "https://ofogh-zamin.vercel.app";
const envUrl = process.env.NEXT_PUBLIC_BASE_URL?.trim();

export const SITE = {
  name: "Ofogh Zamin",
  altName: "افق زمین",
  url: (envUrl && envUrl.length > 0 ? envUrl : DEFAULT_URL).replace(/\/+$/, ""),
  email: "ofoghzamin@gmail.com",
  // Contact numbers. `tel` is the E.164 form (used for `tel:` hrefs and JSON-LD);
  // `display` is the human, Western-digit form (localised to Persian digits at
  // render time for `fa` via `localizeDigits`). Keep the two in sync.
  phones: {
    landline: [
      { tel: "+982133281775", display: "021 3328 1775" },
      { tel: "+982133288065", display: "021 3328 8065" },
      { tel: "+982133288087", display: "021 3328 8087" },
    ],
    mobile: [
      { tel: "+989123104626", display: "0912 310 4626" },
      { tel: "+989124149386", display: "0912 414 9386" },
    ],
    // Also reachable on Rubika, Eitaa and Bale, but only WhatsApp has a reliable
    // click-to-chat URL — the other apps are surfaced as copy in the UI.
    whatsapp: {
      tel: "+989216867807",
      display: "0921 686 7807",
      link: "https://wa.me/989216867807",
    },
  },
} as const;
