import useForm from "../../lib/hooks/useForm";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Dropdown from "../Dropdown/Dropdown";
import { setStorage } from "../../lib/utils/localStorage";
import { Container, ButtonCalc } from "./CheckedStyled";
import ModalInfo from "../ModalInfo/ModalInfo";
import { useModal } from "../../lib/hooks/useModal";

const Checked = () => {
  const navega = useNavigate();
  const { form, setOpcio, setPages, setLanguages, handleClick } = useForm();

  const {
    web: { active: webActive },
    seo: { active: seoActive },
    ads: { active: adsActive },
    extres: { pages, languages },
    total,
  } = form;

  const { modal, handleModalInfo } = useModal();
  const { open, idp, ids, text, valor } = modal;

  useEffect(() => {
    setStorage("webActive", webActive);
    setStorage("paginesWeb", pages);
    setStorage("idiomesWeb", languages);
    setStorage("seoActive", seoActive);
    setStorage("adsActive", adsActive);
    setStorage("total", total);
  }, [webActive, seoActive, adsActive, pages, languages, total]);

  return (
    <Container>
      <h2>¿Qué quieres hacer?</h2>
      <div>
        <label htmlFor="inputWeb">
          <input
            id="inputWeb"
            type="checkbox"
            checked={webActive}
            onChange={(e) => setOpcio("web")}
          />
          Una página web (500€)
        </label>
        {webActive && (
          <Dropdown
            pages={pages}
            languages={languages}
            setPages={setPages}
            setLanguages={setLanguages}
            handleClick={handleClick}
            handleModalInfo={handleModalInfo}
          />
        )}
        <label htmlFor="inputSeo">
          <input
            id="inputSeo"
            type="checkbox"
            checked={seoActive}
            onChange={(e) => setOpcio("seo")}
          />
          Una consultoria SEO (300€)
        </label>
        <label htmlFor="inputAds">
          <input
            id="inputAds"
            type="checkbox"
            checked={adsActive}
            onChange={(e) => setOpcio("ads")}
          />
          Una campañaa de Google Ads (200€)
        </label>
        <p>Precio:&nbsp;{total}€</p>
      </div>
      <ButtonCalc onClick={() => navega("/")}>SALIR</ButtonCalc>
      {open && (
        <ModalInfo
          id="modal"
          onClick={(e) => handleModalInfo(e.target.id)}
          idp={idp}
          ids={ids}
          text={text}
          valor={valor}
        />
      )}
    </Container>
  );
};

export default Checked;
