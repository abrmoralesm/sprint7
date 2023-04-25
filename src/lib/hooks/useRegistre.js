import { useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/ca";
import { getStorage, setStorage } from "../utils/localStorage";

export const useRegistre = () => {
  const [registre, setRegistre] = useState(getStorage("registre")?? []);

 const handleRegistre = (form) => {
   form.id++;
   form.data = dayjs(new Date()).locale("ca-es").format("D MMMM, YYYY");
   const newForm = { ...form };
   setRegistre((prev) => [...prev, newForm]);
   setStorage("registre", [...registre, newForm]);
 };

  return {
    registre,
    handleRegistre,
  };
};
