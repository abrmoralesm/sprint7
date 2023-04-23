import { useState } from "react";
import { textPages, textLanguagues } from "../data/textModal";
import { getStorage } from "../utils/localStorage";

export const useModal = () => {
  const [modal, setModal] = useState({
    open: false,
    idp: "",
    ids: "",
    text: "",
    valor: 0,
  });

  const handleModalInfo = (id) => {
    switch (id) {
      case "infoPages":
        setModal({
          open: true,
          idp: "de páginas",
          ids: "página",
          text: textPages,
          valor: getStorage("paginesWeb") ?? 0,
        });
        return;
      case "infoLanguages":
        setModal({
          open: true,
          idp: "de idiomas",
          ids: "idioma",
          text: textLanguagues,
          valor: getStorage("idiomesWeb") ?? 0,
        });
        return;
      case "modal":
        setModal((prev) => !prev.open);
        return;
      default:
        return;
    }
  };

  return { modal, handleModalInfo };
};
