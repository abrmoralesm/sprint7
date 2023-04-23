import styled from "styled-components";

export const Container = styled.div`
  height: 60rem;
  width: 75rem;
  margin: 5rem auto;
  padding: 3rem 1rem;
  background-color: #232c33;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 2rem;
  border: 0.2rem solid #444;
  border-radius: 2rem;
  > html {
    overflow: hidden;
    height: 100%;
  }
  > h1, h2 {
    width: 90%;
    text-align: center;
    font-size: 2.5rem;
    border-bottom: 0.2rem solid #444;
  }
  > div {
    width: 90%;
    padding: 1rem;
    display: flex;
    justify-content: start;
    position: relative;
  }
`;
