import styled from "styled-components";
import { Button } from "../Button/ButtonStyled.jsx";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 2rem;
  height: 100%;
  position: relative;
  > html {
    overflow: hidden;
    height: 100%;
  }
  > h2 {
    font-size: 1.8rem;
  }
  > div {
    padding-left: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 1.5rem;
    > label {
      font-size: 1.3rem;
      font-weight: 500;
      > input {
        margin-right: 1rem;
      }
    }
    > p {
      margin-top: 1rem;
      font-size: 1.4rem;
      font-weight: bold;
    }
  }
`;

export const ButtonCalc = styled(Button)`
  width: auto;
  height: auto;
  align-self: center;
  padding: 0.5rem 5rem;
  position: relative;
  bottom: 0;
`;
