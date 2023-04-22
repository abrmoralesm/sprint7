import { useState } from "react";
import { formulariInicial } from "../constants/formulariInicial";

const useForm = () => {
  const [form, setFormulari] = useState(formulariInicial);

  const {
    web: { active: webActive, preu: webPreu },
    seo: { active: seoActive, preu: seoPreu },
    ads: { active: adsActive, preu: adsPreu },
    extres: { pages, languages },
    total,
  } = form;

  const calcularExtres = (valor, numero) => {
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
        return calcularExtres("pages", numero);
      }
      case "languages": {
        return calcularExtres("languages", numero);
      }
      default:
        break;
    }
  };

  const setOpcio = (valor) => {
    setFormulari((prev) => ({
      ...prev,
      [valor]: { active: !prev[valor].active, preu: prev[valor].preu },
      total: calcularTotal(valor),
    }));
  };

  const setPages = (numeroPagines) => {
    if (numeroPagines < 0 || isNaN(numeroPagines)) return;
    setFormulari((prev) => ({
      ...prev,
      extres: { pages: numeroPagines, languages: prev.extres.languages },
      total: calcularTotal("pages", numeroPagines),
    }));
  };

  const setLanguages = (numeroIdiomes) => {
    if (numeroIdiomes < 0 || isNaN(numeroIdiomes)) return;
    setFormulari((prev) => ({
      ...prev,
      extres: { pages: prev.extres.pages, languages: numeroIdiomes },
      total: calcularTotal("languages", numeroIdiomes),
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
    setOpcio,
    setPages,
    setLanguages,
    handleClick,
  };
};

export default useForm;
