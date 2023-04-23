import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html {
  font-size: ${({ theme }) => theme.fontSizeGeneral};
}
body {
  background-color: ${({ theme }) => theme.colors.backPage};
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: ${({ theme }) => theme.colors.letter};
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`;
