import useForm from "../../lib/hooks/useForm";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Dropdown from "../Dropdown/Dropdown";
import { setStorage } from "../../lib/utils/localStorage";
import { Container, ButtonCalc } from "./CheckedStyled";

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
      <ButtonCalc classname="boto" onClick={() => navega("/")}>
        Volver
      </ButtonCalc>
    </Container>
  );
};

export default Checked;
