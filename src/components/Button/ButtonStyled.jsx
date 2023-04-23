import styled from "styled-components";

export const Button = styled.button`
  width: 2.1rem;
  height: 2.1rem;
  padding-bottom: 0.2rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.border};
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.colors.backButton};
  font-weight: bold;

  &:hover {
    cursor: pointer;
  }
`;
