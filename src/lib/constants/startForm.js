import { getStorage } from "../utils/localStorage";

const getInitialForm = () => {
  const id = getStorage("id") ?? 0;
  const data = getStorage("data") ?? "";
  const nombreCliente = getStorage("nombreCliente") ?? "";
  const numPresupuesto = getStorage("NumPresupuesto") ?? "";
  const webActive = getStorage("webActive") ?? false;
  const pagesWeb = getStorage("pagesWeb") ?? 0;
  const languagesWeb = getStorage("languagesWeb") ?? 0;
  const seoActive = getStorage("seoActive") ?? false;
  const adsActive = getStorage("adsActive") ?? false;
  const total = getStorage("total") ?? 0;

  return {
    id,
    data,
    nombreCliente,
    numPresupuesto,
    web: {
      active: webActive,
      precio: 500,
    },
    extres: {
      pages: pagesWeb,
      languages: languagesWeb,
    },
    seo: {
      active: seoActive,
      precio: 300,
    },
    ads: {
      active: adsActive,
      precio: 200,
    },
    total,
  };
};

export const FORMULARI_INICIAL = getInitialForm();
