import Button from "../Button/Button";

const Form = (): JSX.Element => {
  return (
    <form autoComplete="off">
      <label>
        Email
        <input type="email" placeholder="Introduce your email" />
      </label>
      <label>
        Password
        <input type="password" placeholder="Introduce your passsword" />
      </label>
      <label>
        Image
        <input type="file" placeholder="Introduce an image" />
      </label>
      <Button text="Sign up" />
    </form>
  );
};

export default Form;
