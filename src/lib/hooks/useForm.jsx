import { useState } from "react";
import { FORMULARI_INICIAL } from "../constants/startForm";

const useForm = () => {
  const [form, setFormulari] = useState(FORMULARI_INICIAL);

  const {
    web: { active: webActive, precio: webPrecio },
    extres: { pages, languages },
    seo: { active: seoActive, precio: seoPrecio },
    ads: { active: adsActive, precio: adsPrecio },

    total,
  } = form;

  const calculateExtres = (valor, numero) => {
    let sumaExtres = 0;
    if (seoActive) sumaExtres += seoPrecio;
    if (adsActive) sumaExtres += adsPrecio;
    if (webActive) sumaExtres += webPrecio;
    valor === "pages"
      ? (sumaExtres += numero * 30 + languages * 30)
      : (sumaExtres += pages * 30 + numero * 30);
    return sumaExtres;
  };

  const calcularTotal = (valor, numero) => {
    switch (valor) {
      case "web": {
        return webActive
          ? total - webPrecio - pages * 30 - languages * 30
          : total + webPrecio + pages * 30 + languages * 30;
      }
      case "seo": {
        return seoActive ? total - seoPrecio : total + seoPrecio;
      }
      case "ads": {
        return adsActive ? total - adsPrecio : total + adsPrecio;
      }
      case "pages": {
        return calculateExtres("pages", numero);
      }
      case "languages": {
        return calculateExtres("languages", numero);
      }
      default:
        break;
    }
  };

  const setDades = (key, valor) => {
    setFormulari((prev) => ({
      ...prev,
      [key]: valor,
    }));
  };

  const setOption = (key) => {
    setFormulari((prev) => ({
      ...prev,
      [key]: { active: !prev[key].active, precio: prev[key].precio },
      total: calcularTotal(key),
    }));
  };

  const setPages = (numPages) => {
    if (numPages < 0 || isNaN(numPages)) return;
    setFormulari((prev) => ({
      ...prev,
      extres: { pages: numPages, languages: prev.extres.languages },
      total: calcularTotal("pages", numPages),
    }));
  };

  const setLanguages = (numLanguages) => {
    if (numLanguages < 0 || isNaN(numLanguages)) return;
    setFormulari((prev) => ({
      ...prev,
      extres: { pages: prev.extres.pages, languages: numLanguages },
      total: calcularTotal("languages", numLanguages),
    }));
  };

  const handleClick = (id) => {
    switch (id) {
      case "pagesUp":
        setPages(pages ? pages + 1 : 1);
        break;
      case "pagesDown":
        setPages(pages - 1);
        break;
      case "languagesUp":
        setLanguages(languages ? languages + 1 : 1);
        break;
      case "languagesDown":
        setLanguages(languages - 1);
        break;
      default:
        return;
    }
  };

  return {
    form,
    setFormulari,
    setDades,
    setOption,
    setPages,
    setLanguages,
    handleClick,
  };
};

export default useForm;
