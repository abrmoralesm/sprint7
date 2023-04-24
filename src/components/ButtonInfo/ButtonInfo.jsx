import { IoAlertCircleOutline } from "react-icons/io5";
import { Icon } from "./ButtonInfoStyled.jsx";

const PushInfo = ({ id, onClick }) => (
  <Icon>
    <IoAlertCircleOutline onClick={onClick} id={id} />
  </Icon>
);

export default PushInfo;
