import { useState } from "react";
import { FORMULARI_INICIAL } from "../constants/formulariInicial";

const useForm = () => {
  const [form, setFormulari] = useState(FORMULARI_INICIAL);

  const {
    web: { active: webActive, precio: webPreu },
    extres: { pages, languages },
    seo: { active: seoActive, precio: seoPreu },
    ads: { active: adsActive, precio: adsPreu },

    total,
  } = form;

  const calculateExtres = (valor, numero) => {
    let sumaExtres = 0;
    if (seoActive) sumaExtres += seoPreu;
    if (adsActive) sumaExtres += adsPreu;
    if (webActive) sumaExtres += webPreu;
    valor === "pages"
      ? (sumaExtres += numero * 30 + languages * 30)
      : (sumaExtres += pages * 30 + numero * 30);
    return sumaExtres;
  };

  const calcularTotal = (valor, numero) => {
    switch (valor) {
      case "web": {
        return webActive
          ? total - webPreu - pages * 30 - languages * 30
          : total + webPreu + pages * 30 + languages * 30;
      }
      case "seo": {
        return seoActive ? total - seoPreu : total + seoPreu;
      }
      case "ads": {
        return adsActive ? total - adsPreu : total + adsPreu;
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
      [key]: { actiu: !prev[key].actiu, preu: prev[key].preu },
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
