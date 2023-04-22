import { Link } from "react-router-dom";
import { Container } from "./StartAppStyled";

const StartApp = () => (
  <Container>
    <p>
      Acaba de acceder a la aplicación de presupuestos webs. Podrá escoger las
      opciones más favorables para su proyecto. Estas son las posiblidades que
      encontrará:
    </p>
    <ul>
      <li>Páginas web</li>
      <li>Consultoria SEO</li>
      <li>Campañas Google Ads</li>
    </ul>
    <p>
      También tendrá la posibilidad de elegir el número de páginas y los idiomas
      en los que se configurará su web
    </p>
    <ul>
      <li>
        <span>Por favor presione </span>
        <Link className="button-link" to="Budget">
          <button className="button"> aquí </button>
        </Link>
        {""}
        <span> para acceder</span>
      </li>
    </ul>
  </Container>
);

export default StartApp;
