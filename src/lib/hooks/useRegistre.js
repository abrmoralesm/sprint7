import { useState } from "react";

export const useRegistre = () => {
  const [registre, setRegistre] = useState([]);

  const handleRegistre = (formulari) => {
    formulari.id++;
    const newForm = { ...formulari };
    setRegistre((prev) => {
      return [...prev, newForm];
    });
  };

  return {
    registre,
    setRegistre,
    handleRegistre,
  };
};
