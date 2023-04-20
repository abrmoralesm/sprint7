import useFormulario from "../../lib/hooks/useFormulari";
import Dropdown from "../Dropdown/Dropdown";
import { Container } from "./CheckedStyled";

const Checked = () => {
  const { formulario, setOpcio, setPages, setLanguage } = useFormulario();
  const { web, seo, ads, total } = formulario;

  return (
    <Container className="checked">
      <h2>¿Qué quieres hacer?</h2>
      <div>
        <label htmlFor="inputWeb">
          <input
            id="inputWeb"
            type="checkbox"
            checked={web.active}
            onChange={setOpcio.bind(null, "web")}
          />
          Una página web (500€)
        </label>
        {web.active && (
          <Dropdown
            pages={formulario.extras.pages}
            languages={formulario.extras.languages}
            setPages={setPages}
            setLanguage={setLanguage}
          />
        )}
        <label htmlFor="inputSeo">
          <input
            id="inputSeo"
            type="checkbox"
            checked={seo.active}
            onChange={setOpcio.bind(null, "seo")}
          />
          Una consultoria SEO (300€)
        </label>
        <label htmlFor="inputAds">
          <input
            id="inputAds"
            type="checkbox"
            checked={ads.active}
            onChange={setOpcio.bind(null, "ads")}
          />
          Una campaña de Google Ads (200€)
        </label>
        <p>Precio:&nbsp;{total}€</p>
      </div>
    </Container>
  );
};

export default Checked;
