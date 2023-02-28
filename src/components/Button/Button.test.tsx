import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Given a component Button", () => {
  describe("When it is rendered with the text 'Sign up'", () => {
    test("Then it should return a button with 'Sign up' text", () => {
      const buttonText = "Sign up";
      render(<Button text={buttonText} />);

      const buttonElement = screen.getByRole("button", { name: buttonText });

      expect(buttonElement).toBeInTheDocument();
    });
  });
});
