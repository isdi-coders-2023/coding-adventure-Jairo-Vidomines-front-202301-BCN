import { useState } from "react";
import Button from "../Button/Button";
import FormStyled from "./FormStyled";

const Form = (): JSX.Element => {
  const [registerData, setRegisterData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData({
      ...registerData,
      [event.target.name]: event.target.value,
    });
  };

  let form = new FormData();

  const handleImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    form.append("image", event.target.files![0]);
  };

  const hasEmptyFields =
    registerData.email === "" || registerData.password === "";

  return (
    <FormStyled className="form" autoComplete="off">
      <label className="form__label">
        Email
        <input
          className="form__input"
          type="email"
          placeholder="Introduce your email"
          onChange={handleInputChange}
        />
      </label>
      <label className="form__label">
        Password
        <input
          className="form__input"
          type="password"
          placeholder="Introduce your passsword"
          onChange={handleInputChange}
        />
      </label>
      <label className="form__label">
        Image
        <input
          className="form__input"
          type="file"
          placeholder="Introduce an image"
          onChange={handleImage}
        />
      </label>
      <Button text="Sign up" isDisabled={hasEmptyFields} />
    </FormStyled>
  );
};

export default Form;
