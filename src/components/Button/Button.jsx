import { Button } from "./ButtonStyled";

const Boto = ({ id, onClick, value }) => (
  <Button id={id} onClick={onClick}>
    {value}
  </Button>
);

export default Boto;
