import styled from "styled-components";

export const Icona = styled.i`
  display: flex;
  margin-left: 0.5rem;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.backmodal};
  background-color: ${({ theme }) => theme.colors.backInfo};
  border-radius: 2rem;
  &:hover {
    cursor: pointer;
  }
`;
