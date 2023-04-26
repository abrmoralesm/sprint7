import { useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/ca";
import { getStorage, setStorage } from "../utils/localStorage";

export const useRegistre = () => {
  const [registro, setRegistre] = useState(getStorage("registro") ?? []);

  const handleRegistre = (form) => {
    form.id = registro.length + 1;
    form.data = dayjs(new Date()).locale("ca-es").format("D MMMM, YYYY");
    setRegistre((prev) => [...prev, form]);
    setStorage("registro", registro);
  };

  return {
    registro,
    handleRegistre,
  };
};