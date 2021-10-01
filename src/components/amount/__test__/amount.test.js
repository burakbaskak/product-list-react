import { render, screen, fireEvent } from "../../../utils/test-util";
import { Amount } from "../index";

describe("amount component", () => {
  it("calls onChange prop when clicked reduce button", () => {
    const handleOnChange = jest.fn();
    render(<Amount onChange={handleOnChange} />);

    fireEvent.click(screen.getByLabelText(/reduce amount/i));
    expect(handleOnChange).toHaveBeenCalledTimes(1);
  });

  it("calls onChange prop when clicked increase button", () => {
    const handleOnChange = jest.fn();
    render(<Amount onChange={handleOnChange} />);

    fireEvent.click(screen.getByLabelText(/increase amount/i));
    expect(handleOnChange).toHaveBeenCalledTimes(1);
  });
});
