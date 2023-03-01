import Button from "../Button/Button";
import FormStyled from "./FormStyled";

const Form = (): JSX.Element => {
  return (
    <FormStyled className="form" autoComplete="off">
      <label className="form__label">
        Email
        <input
          className="form__input"
          type="email"
          placeholder="Introduce your email"
        />
      </label>
      <label className="form__label">
        Password
        <input
          className="form__input"
          type="password"
          placeholder="Introduce your passsword"
        />
      </label>
      <label className="form__label">
        Image
        <input
          className="form__input"
          type="file"
          placeholder="Introduce an image"
        />
      </label>
      <Button text="Sign up" />
    </FormStyled>
  );
};

export default Form;
