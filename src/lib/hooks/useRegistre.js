import { useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/ca";

export const useRegistre = () => {
  const [registre, setRegistre] = useState([]);

  const handleRegistre = (form) => {
    form.id++;
    form.data = dayjs(new Date()).locale("ca-es").format("D MMMM, YYYY");
    const newForm = { ...form };
    return setRegistre((prev) => [...prev, newForm]);
  };

  return {
    registre,
    handleRegistre,
  };
};
