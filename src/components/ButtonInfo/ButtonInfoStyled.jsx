import styled from "styled-components";

export const Icon = styled.i`
  display: flex;
  margin-left: 0.5rem;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.backmodal};
  background-color: ${({ theme }) => theme.colors.fonsInfo};
  border-radius: 2rem;
  &:hover {
    cursor: pointer;
  }
`;
