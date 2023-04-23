import { Overlay, Container } from "./ModalInfoStyled";
import ButtonInfo from "../../components/ButtonInfo/ButtonInfo";

const ModalInfo = ({ id, onClick, text, idp, ids, valor }) => (
  <Overlay onClick={onClick} id={id}>
    <Container onClick={(e) => e.stopPropagation()}>
      <div>
        <ButtonInfo />
        <h3>INFORMACIÓN</h3>
      </div>
      <p>{text}</p>
      <ul>
        <li>
          El número {idp} es:<span> {valor}</span>
        </li>
        <li>
          El precio por {ids} es de: <span>30€</span>
        </li>
        <li>
          Precio total {idp}: <span>{valor * 30}€</span>
        </li>
      </ul>
    </Container>
  </Overlay>
);

export default ModalInfo;
