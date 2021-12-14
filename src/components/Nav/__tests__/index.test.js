import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Nav from "..";

afterEach(cleanup);

describe("Nav", () => {
  it("should render correctly", () => {
    render(<Nav />);
  });
  it("matches snapshot DOM node structure", () => {
    const { container } = render(<Nav />);
    expect(container).toMatchSnapshot();
  });
});

describe("emoji is visible", () => {
  it("inserts emoji into h2", () => {
    // Arrange
    const { getByLabelText } = render(<Nav />);
    expect(getByLabelText("camera")).toHaveTextContent("📸");
    // Assert
  });
});

describe('links are visible', () => {
    it('inserts text into the links', () => {
      const { getByTestId } = render(<Nav />);
      expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
      expect(getByTestId('about')).toHaveTextContent('About me');
    });
  })
