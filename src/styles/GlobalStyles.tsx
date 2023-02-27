import "@fontsource/saira-stencil-one";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
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
}

:root {
  --main-color-button: #cccf18;
  --main-font: "Saira Stencil One", sans-serif;
  --background-color: #1e1e1e;
}

ol, ul, li {
  list-style: none;
}
`;

export default GlobalStyles;
