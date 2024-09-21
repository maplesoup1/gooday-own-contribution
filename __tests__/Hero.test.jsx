import "@testing-library/jest-dom";
import {
  render,
  screen,
  act,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import Hero from "@/components/home/hero";

describe("Hero", () => {
  describe("Rendering", () => {
    it("should render Gooday Logo", () => {
      render(<Hero />);
      //   expect(screen.getAllByAltText("logo")).toBeInTheDocument();
    });

    it("should render Center Charater", () => {
      render(<Hero />);
      const centerCharacter = screen.getByTestId("center-character");
      expect(centerCharacter).toBeInTheDocument();
    });

    it("should render All Small Charaters", () => {
      render(<Hero />);
      const smallCharaters = screen.getAllByTestId("small-character");
      expect(smallCharaters).toHaveLength(7);
    });
  });

  describe("Functionality", () => {
    it("should toggle center character change", async () => {
      // Rendering
      render(<Hero />);
      const centerCharacter = screen.getByTestId("center-character");
      expect(centerCharacter).toHaveAttribute(
        "src",
        expect.stringMatching(/maria/i)
      );

      // Interaction
      await act(async () => {
        const Max = screen.getByTestId("Max");
        fireEvent.click(Max);
      });

      // Assertion
      await waitFor(() => {
        const centerCharacter = screen.getByTestId("center-character");
        expect(centerCharacter).not.toHaveAttribute(
          "src",
          expect.stringMatching(/maria/i)
        );
        expect(centerCharacter).toHaveAttribute(
          "src",
          expect.stringMatching(/max/i)
        );
      });
    });
  });
});
