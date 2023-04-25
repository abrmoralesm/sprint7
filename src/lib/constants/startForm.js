import { getStorage } from "../utils/localStorage";


export const FORMULARI_INICIAL = {
  id: getStorage("id") ?? 0,
  data: getStorage("data") ?? "",
  nombreCliente: getStorage("nombreCliente") ?? "",
  numPresupuesto: getStorage("NumPresupuesto") ?? "",
  web: {
    active: getStorage("webActive") ?? false,
    precio: 500,
  },
  extres: {
    pages: getStorage("pagesWeb") ?? 0,
    languages: getStorage("languagesWeb") ?? 0,
  },
  seo: {
    active: getStorage("seoActive") ?? false,
    precio: 300,
  },
  ads: {
    active: getStorage("adsActive") ?? false,
    precio: 200,
  },

  total: getStorage("total") ?? 0,
};
