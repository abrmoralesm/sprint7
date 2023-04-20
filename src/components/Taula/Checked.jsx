import useFormulario from "../../lib/hooks/useFormulario";
import { Container } from "./ChekedStyled";


const Checked = () => {
  const { formulari, setOpcio } = useFormulario();
  const {
    web: { active: webactive },
    seo: { active: seoactive },
    ads: { active: adsactive },
    total,
  } = formulari;

  return (
    <Container className="taula">
      <h2>¿Qué quieres hacer?</h2>
      <div>
        <label htmlFor="inputWeb">
          <input
            id="inputWeb"
            type="checkbox"
            checked={webactive}
            onChange={(e) => setOpcio("web")}
          />
          Una página web (500€)
        </label>
        <label htmlFor="inputSeo">
          <input
            id="inputSeo"
            type="checkbox"
            checked={seoactive}
            onChange={(e) => setOpcio("seo")}
          />
          Una consultoria SEO (300€)
        </label>
        <label htmlFor="inputAds">
          <input
            id="inputAds"
            type="checkbox"
            checked={adsactive}
            onChange={(e) => setOpcio("ads")}
          />
          Una campaña de Google Ads (200€)
        </label>
        <p>Precio:&nbsp;{total || 0}€</p>
      </div>
    </Container>
  );
};

export default Checked;
