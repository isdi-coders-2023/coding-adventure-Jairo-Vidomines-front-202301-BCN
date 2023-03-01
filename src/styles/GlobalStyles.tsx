import "@fontsource/saira-stencil-one";
import "@fontsource/roboto";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
  --main-color-button: #cccf18;
  --main-color-button-disabled: 57%;
  --main-font: "Roboto", sans-serif;
  --secondary-font: "Saira Stencil One", sans-serif;
  --background-color: #1e1e1e;
}

*, 
*:after,
*:before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  }

body {
  padding: 20px;
  background-color: var(--background-color);
  font-family: "Inter", sans-serif;
  width: 100%;
  min-height: 100vh;
  color: #fff;
}

input {
  border: none;
}

ol, ul, li {
  list-style: none;
}
`;

export default GlobalStyles;
