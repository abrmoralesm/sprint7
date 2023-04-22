import { useNavigate } from "react-router-dom";
import { Container } from "../common/BasicContainerStyled.jsx";
import { Img, ButtonCalc } from "./ErrorStyled";
import error404 from "../../assets/img/error404.jpeg";

const Error = () => {
  const navega = useNavigate();
  return (
    <Container style={{ justifyContent: "space-between" }}>
      <h2>404 - Página no encontrada</h2>
      <Img src={error404} alt="error 404" />
      <ButtonCalc className="boto" onClick={() => navega("/")}>
        Volver
      </ButtonCalc>
    </Container>
  );
};

export default Error;
