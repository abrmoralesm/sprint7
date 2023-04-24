import { IoSearch } from "react-icons/io5";
import { Icon } from "./ButtonSearchStyled.jsx";

const ButtonSearch = ({ onClick }) => (
  <Icon>
    <IoSearch onClick={onClick} />
  </Icon>
);

export default ButtonSearch;
