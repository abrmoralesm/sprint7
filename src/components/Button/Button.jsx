import { Button } from "./ButtonStyled"

const Push = ({ id, onClick, value }) => (
  <Button id={id} onClick={onClick}>
    {value}
  </Button>
);

export default Push;
