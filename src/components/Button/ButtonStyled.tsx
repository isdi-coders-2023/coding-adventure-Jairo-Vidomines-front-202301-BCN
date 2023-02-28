import styled from "styled-components";

const ButtonStyled = styled.button`
  position: absoulte;
  width: 323.02px;
  height: 40px;
  left: 18.99px;
  top: 824px;
  border-radius: 10px;
  font-size: 20px;
  border: none;
  line-height: 31.48px;
  background-color: var(--main-color-button);
  font-family: var(--main-font);

  :disabled {
    opacity: var(--main-color-button-disabled);
  }

  @media (min-width: 786px) {
    height: 57px;
    top: 979px;
    left: 327px;
  }
`;

export default ButtonStyled;
