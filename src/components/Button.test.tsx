import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Given a component Button", () => {
  describe("When it is rendered", () => {
    test("Then it should return a button with 'Sign up' text", () => {
      render(<Button text="Sign up" />);
      const buttonText = "Sign up";
      const buttonElement = screen.getByRole("button", { name: buttonText });

      expect(buttonElement).toBeInTheDocument();
    });
  });
});
