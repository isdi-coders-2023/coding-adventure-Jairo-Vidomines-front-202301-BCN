import { render, screen } from "@testing-library/react";
import Form from "./Form";

describe("Given a Form component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a label with 'Email' text", () => {
      render(<Form />);

      const labelEmailText = "Email";

      const labelText = screen.getByLabelText(labelEmailText);

      expect(labelText).toBeInTheDocument();
    });

    test("Then it should show a label with 'Password' text", () => {
      render(<Form />);

      const labelPasswordText = "Password";

      const labelText = screen.getByLabelText(labelPasswordText);

      expect(labelText).toBeInTheDocument();
    });

    test("Then it should show a label with 'Image' text", () => {
      render(<Form />);

      const labelImageText = "Image";

      const labelText = screen.getByLabelText(labelImageText);

      expect(labelText).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Sign up'", () => {
      render(<Form />);

      const buttonText = "Sign up";

      const buttonElement = screen.getByRole("button", { name: buttonText });

      expect(buttonElement).toBeInTheDocument();
    });
  });
});
