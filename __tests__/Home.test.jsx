import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "../src/app/(marketing)/page";

describe("Home", () => {
  describe("Rendering", () => {
    it("should render Home component", () => {
      render(<Home />);
      expect(screen.getByText("Gooday Website")).toBeInTheDocument();
    });
  });
});
