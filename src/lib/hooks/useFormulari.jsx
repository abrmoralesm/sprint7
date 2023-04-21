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

  const calculateTotal = (valor, numero) => {
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
      [valor]: {
        active: !prev[valor].active,
        precio: prev[valor].precio,
      },
      total: calculateTotal(valor),
    }));
  };

  const setPages = (numeroPaginas) => {
    if (numeroPaginas < 0 || isNaN(numeroPaginas)) return;
    setFormulari((prev) => ({
      ...prev,
      extras: {
        pages: numeroPaginas,
        languages: prev.extras.languages,
      },
      total: calculateTotal("pages", numeroPaginas),
    }));
  };

  const setLanguages = (numeroIdiomas) => {
    if (numeroIdiomas < 0 || isNaN(numeroIdiomas)) return;
    setFormulari((prev) => ({
      ...prev,
      extras: {
        pages: prev.extras.pages,
        languages: numeroIdiomas,
      },
      total: calculateTotal("languages", numeroIdiomas),
    }));
  };
  const handleClick = (id) => {
    switch (id) {
      case "pagesInc":
        setPages(formulario.extras.pages ? formulario.extras.pages + 1 : 1);
        break;
      case "pagesDec":
        setPages(formulario.extras.pages - 1);
        break;
      case "languagesInc":
        setLanguages(
          formulario.extras.languages ? formulario.extras.languages + 1 : 1
        );
        break;
      case "languagesDec":
        setLanguages(formulario.extras.languages - 1);
        break;
      default:
        return;
    }
  };
  return { formulario, setOpcio, setPages, setLanguages,  handleClick };
};

export default useFormulari;