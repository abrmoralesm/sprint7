import styled from "styled-components";

export const Item = styled.ul`
  margin: 0.7rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.backModal};
  border: 0.3rem solid ${({ theme }) => theme.colors.backInfo};
  border-radius: 1.2rem;
  display: flex;
  flex-direction: column;
  span {
    font-weight: bold;
  }
  > div:nth-of-type(1) {
    list-style: none;
    display: flex;
    justify-content: space-between;
    border-bottom: 0.2rem solid ${({ theme }) => theme.colors.backInfo};
    color: ${({ theme }) => theme.colors.backInfo};
    padding: 0 1rem 0.25rem;
    margin-bottom: 0.25rem;
  }
  > div:nth-of-type(2) {
    list-style: none;
    display: flex;
    margin: 0.5rem 1rem;
    gap: 0.5rem;
    > li:nth-of-type(1) {
      flex: 1;
    }
    > li:nth-of-type(2) {
      flex: 1.5;
    }
  }
  > div:nth-of-type(3) {
    list-style: none;
    margin: 0 1rem;
    > li > ul {
      list-style: disc;
      font-size: 0.8rem;
      display: flex;
      flex-direction: column wrap;
      justify-content: start;
      align-items: start;
      gap: 0.75rem;
      margin: 0.5rem;
      > li,
      > div {
        margin-left: 0.75rem;
      }
      > div > ul {
        list-style: disc;
        margin: 0.25rem 0.75rem;
      }
    }
  }
  > li {
    border-top: 0.2rem solid ${({ theme }) => theme.colors.backInfo};
    color: ${({ theme }) => theme.colors.backInfo};
    margin-top: 0.25rem;
    padding: 0.25rem 1rem 0;
  }
`;
