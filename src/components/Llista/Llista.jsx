import ItemLlista from "../ItemLlista/ItemLlista";
import LlistaBuida from "./LlistaBuida";
import { Container } from "./llistaStyled";

const Llista = ({ listaOrdenada }) => {
  return (
    <Container>
      {!listaOrdenada.length ? (
        <LlistaBuida />
      ) : (
        <ul style={{ width: "100%" }}>
          {listaOrdenada.map((pressupost) => (
            <ItemLlista key={pressupost.id} pressupost={pressupost} />
          ))}
        </ul>
      )}
    </Container>
  );
};

export default Llista;
