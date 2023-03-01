import { render, screen } from "@testing-library/react";
import Form from "./Form";

describe("Given a Form component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an input with label text: 'Email'", () => {
      const expectResult = "Email";

      render(<Form />);
      const result = screen.getByLabelText(expectResult);

      expect(result).toBeInTheDocument();
    });

    test("Then it should show an input with label text: 'Password'", () => {
      const expectResult = "Password";

      render(<Form />);
      const result = screen.getByLabelText(expectResult);

      expect(result).toBeInTheDocument();
    });

    test("Then it should show an input with label text: 'Image'", () => {
      const expectResult = "Image";

      render(<Form />);
      const result = screen.getByLabelText(expectResult);

      expect(result).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Sign up'", () => {
      const expectResult = "Sign up";

      render(<Form />);
      const result = screen.getByRole("button", { name: expectResult });

      expect(result).toBeInTheDocument();
    });
  });
});
