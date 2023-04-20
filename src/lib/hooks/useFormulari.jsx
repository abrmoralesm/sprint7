import { useState } from "react";

const useFormulari = () => {
  const [formulario, setFormulari] = useState({
    web: {
      active: false,
      precio: 500,
    },
    seo: {
      active: false,
      precio: 300,
    },
    ads: {
      active: false,
      precio: 200,
    },
    extras: {
      pages: 0,
      languages: 0,
    },
    total: 0,
  });

  const calculateExtras = (valor, numero) => {
    let extras = 0;
    if (formulario.web.active) extras += formulario.web.precio;
    if (formulario.seo.active) extras += formulario.seo.precio;
    if (formulario.ads.active) extras += formulario.ads.precio;
    valor === "pages"
      ? (extras += numero * 30 + formulario.extras.languages * 30)
      : (extras += formulario.extras.pages * 30 + numero * 30);
    return extras;
  };

  const calcularTotal = (valor, numero) => {
    const operaciones = {
      web: () => {
        return formulario.web.active
          ? formulario.total - formulario.web.precio
          : formulario.total + formulario.web.precio;
      },
      seo: () => {
        return formulario.seo.active
          ? formulario.total - formulario.seo.precio
          : formulario.total + formulario.seo.precio;
      },
      ads: () => {
        return formulario.ads.active
          ? formulario.total - formulario.ads.precio
          : formulario.total + formulario.ads.precio;
      },
      pages: () => {
        return calculateExtras("pages", numero);
      },
      languages: () => {
        return calculateExtras("languages", numero);
      },
    };
    return operaciones[valor]();
  };

  const setOpcio = (valor) => {
    setFormulari((prev) => ({
      ...prev,
      [valor]: { active: !prev[valor].active, precio: prev[valor].precio },
      total: calcularTotal(valor),
    }));
  };

  const setPages = (numeroPagines) => {
    if (numeroPagines < 0 || isNaN(numeroPagines)) return;
    setFormulari((prev) => ({
      ...prev,
      extras: { pages: numeroPagines, languages: prev.extras.languages },
      total: calcularTotal("pages", numeroPagines),
    }));
  };

  const setLanguage = (numLanguages) => {
    if (numLanguages < 0 || isNaN(numLanguages)) return;
    setFormulari((prev) => ({
      ...prev,
      extras: { pages: prev.extras.pages, languages: numLanguages },
      total: calcularTotal("languages", numLanguages),
    }));
  };

  return { formulario, setOpcio, setPages, setLanguage };
};

export default useFormulari;
