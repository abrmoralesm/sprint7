import { IoAlertCircleOutline } from "react-icons/io5";
import { Icona } from "./ButtonInfoStyled.jsx";

const PushInfo = ({ id, onClick }) => (
  <Icona>
    <IoAlertCircleOutline onClick={onClick} id={id} />
  </Icona>
);

export default PushInfo;
