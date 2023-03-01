import styled from "styled-components";

const ButtonStyled = styled.button`
  width: 323.02px;
  height: 40px;
  border-radius: 10px;
  font-size: 20px;
  border: none;
  line-height: 31.48px;
  background-color: var(--main-color-button);
  font-family: var(--secondary-font);

  :disabled {
    opacity: var(--main-color-button-disabled);
  }

  @media (min-width: 786px) {
    height: 57px;
  }
`;

export default ButtonStyled;
