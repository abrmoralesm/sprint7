import { useState, useEffect } from "react";

const useFormulario = () => {
  const [formulari, setFormulari] = useState({
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
    total: 0,
  });

  const calcularTotal = () => {
    let total = 0;
    if (formulari.web.active) total += formulari.web.precio;
    if (formulari.seo.active) total += formulari.seo.precio;
    if (formulari.ads.active) total += formulari.ads.precio;
    return total;
  };

  useEffect(() => {
    setFormulari((prev) => ({
      ...prev,
      total:
        prev.web.active * prev.web.precio +
        prev.seo.active * prev.seo.precio +
        prev.ads.active * prev.ads.precio,
    }));
  }, [formulari]);

  const setOpcio = (valor) => {
    setFormulari((prev) => ({
      ...prev,
      [valor]: {
        active: !prev[valor].active,
        precio: prev[valor].precio,
      },
      total: calcularTotal(),
    }));
  };

  return { formulari, setOpcio };
};

export default useFormulario;
