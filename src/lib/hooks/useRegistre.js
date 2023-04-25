import { useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/ca";
import { getStorage, setStorage } from "../utils/localStorage";

export const useRegistre = () => {
  const [registro, setRegistre] = useState(getStorage("registro") ?? []);

  const handleRegistre = (form) => {
    form.id++;
    form.data = dayjs(new Date()).locale("ca-es").format("D MMMM, YYYY");
    const newForm = { ...form };
    setRegistre((prev) => [...prev, newForm]);
    setStorage("registro", [...registro, newForm]);
  };

  return {
    registro,
    handleRegistre,
  };
};
