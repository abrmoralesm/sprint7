import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 2rem;
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

      > input {
        margin-right: 1rem;
      }
    }
    > p {
      margin-top: 1rem;
      font-size: 1.4rem;
    }
  }

  height: 60rem;
  max-width: 60rem;
  margin: 10rem auto;
  padding: 3rem 2rem;
  background-color: #232c33;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 2rem;
  border: 0.1rem solid #dadff7;
  border-radius: 3rem;
  > h1 {
    width: 90%;
    text-align: center;
    font-size: 2.5rem;
    border-bottom: 1.2rem solid #fff;
  }
  > div {
    width: 90%;
    padding: 1rem;
    display: flex;
    justify-content: start;
  }

`;

