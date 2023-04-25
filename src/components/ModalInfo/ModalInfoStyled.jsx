import styled, { keyframes } from "styled-components";

const popUp = keyframes`
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;


export const Overlay = styled.div`
  animation: ${popUp} 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) both;

  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.fonsOverlay};
`;

export const Container = styled.div`

  position: relative;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70rem;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 2rem;
  background-color: ${({ theme }) => theme.colors.backmodal};
  border: 0.5rem solid ${({ theme }) => theme.colors.borderInfo};
  border-radius: 1.5rem;
  text-align: left;
  > div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    > h3 {
      align-self: center;
      font-size: 1.8rem;
    }
  }
  > p {
    font-size: 1.5rem;
    line-height: 1.5;
  }
  > ul {
    font-size: 1.5rem;
    padding-left: 2rem;
    font-weight: normal;
    > li {
      margin: 0.3rem 0;
      > span {
        font-weight: bold;
        margin: 0.2rem;
      }
    }
  }
`;
