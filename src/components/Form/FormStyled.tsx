import styled from "styled-components";

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 48px;
  font-family: var(--main-font);

  .form {
    &__label {
      display: flex;
      flex-direction: column;
      gap: 9px;
      font-weight: 700px;
    }

    &__input:not([type="file"]) {
      height: 40px;
      border-radius: 8px;
      border: 1px solid #fff;
      background-color: #e8e8e8;
      padding: 11px;
    }
  }

  @media screen and (min-width: 987px) {
    align-items: center;

    .form {
      &__input {
        height: 56px;
        width: 832.05px;
      }
    }
  }
`;

export default FormStyled;
