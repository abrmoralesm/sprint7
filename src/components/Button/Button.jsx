import { Button } from "./ButtonStyled"

const Push = ({ style, id, onClick, value }) => (
  <Button style={style} id={id} onClick={onClick}>
    {value}
  </Button>
);

export default Push;
