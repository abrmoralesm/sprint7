import styled from "styled-components";

export const Icon = styled.i`
  margin-left: 0.5rem;
  padding: 0.25rem 0.25rem 0;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.fonsModal};
  background-color: ${({ theme }) => theme.colors.vores};
  border-radius: 2rem;
  &:hover {
    cursor: pointer;
  }
`;
