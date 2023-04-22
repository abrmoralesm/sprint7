import { getStorage } from "../utils/localStorage";

export const formulariInicial = {
  web: {
    active: getStorage("webActive") ?? false,
    precio: 500,
  },
  seo: {
    active: getStorage("seoActive") ?? false,
    precio: 300,
  },
  ads: {
    active: getStorage("adsActive") ?? false,
    precio: 200,
  },
  extres: {
    pages: getStorage("paginesWeb") ?? 0,
    languages: getStorage("idiomesWeb") ?? 0,
  },
  total: getStorage("total") ?? 0,
};
