import { render, screen, fireEvent } from "@testing-library/react";
import { Sorting } from "../index";

describe("Sorting component", () => {
  it("should handle render with title prop", () => {
    render(<Sorting />);
    expect(screen.getByText(/Sorting/i)).toBeInTheDocument();
  });

  it("calls onChange prop when item selected in list", () => {
    const handleOnChange = jest.fn();
    render(<Sorting onChange={handleOnChange} />);
    const radio = screen.getByRole("radio", {
      name: "sorting-2 Price high to low",
    });
    expect(radio.checked).toEqual(false);
    fireEvent.click(radio);
    expect(radio.checked).toEqual(true);
  });
});
