import { render, screen, fireEvent } from "@testing-library/react";
import { Pagination } from "../index";

describe("Pagination component", () => {
  it("should render", () => {
    render(<Pagination pageCount={10} />);

    expect(screen.getByText(/Prev/i)).toBeInTheDocument();
  });

  it("calls onChange prop when clicked page button", () => {
    const handleOnChange = jest.fn();
    render(<Pagination pageCount={10} onChange={handleOnChange} />);

    fireEvent.click(screen.getByText(/3/i));
    expect(handleOnChange).toHaveBeenCalledTimes(1);
    expect(handleOnChange).toHaveBeenCalledWith(3);
  });
});
