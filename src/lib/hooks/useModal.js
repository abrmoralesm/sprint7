import { useState } from "react";
import { textPages, textLanguagues } from "../data/textModal";
import { getStorage } from "../utils/localStorage";

const storageKeys = {
  pagesWebWeb: "pagesWebWeb",
  idiomesWeb: "idiomesWeb",
};

const modalContentMap = {
  infoPages: {
    idp: "de páginas",
    ids: "página",
    text: textPages,
    storageKey: storageKeys.pagesWebWeb,
  },
  infoLanguages: {
    idp: "de idiomas",
    ids: "idioma",
    text: textLanguagues,
    storageKey: storageKeys.idiomesWeb,
  },
};

export const useModal = () => {
  const [modal, setModal] = useState({
    open: false,
    idp: "",
    ids: "",
    text: "",
    valor: 0,
  });

  const handleModalInfo = (id) => {
    const content = modalContentMap[id];
    if (!content) return;

    setModal({
      open: true,
      idp: content.idp,
      ids: content.ids,
      text: content.text,
      valor: getStorage(content.storageKey) ?? 0,
    });
  };

  const handleModalToggle = () => {
    setModal((prev) => ({ ...prev, open: !prev.open }));
  };

  return { modal, handleModalInfo, handleModalToggle };
};
