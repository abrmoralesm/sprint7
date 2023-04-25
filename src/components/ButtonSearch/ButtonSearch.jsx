import { IoSearch } from "react-icons/io5";
import { Icona } from "./ButtonSearchStyled.jsx";

const ButtonSearch = ({ onClick }) => (
  <Icona>
    <IoSearch onClick={onClick} />
  </Icona>
);

export default ButtonSearch;
