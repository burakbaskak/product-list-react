import { render, screen, fireEvent } from "../../../utils/test-util";
import { TagList } from "../index";

describe("TagList component", () => {
  it("should render tags prop", () => {
    render(<TagList tags={["first", "second"]} />);

    expect(screen.getByText(/second/i)).toBeInTheDocument();
  });

  it("calls onChange prop when clicked tag button", () => {
    const handleOnChange = jest.fn();
    render(<TagList tags={["first", "second"]} onChange={handleOnChange} />);

    fireEvent.click(screen.getByText(/first/i));
    expect(handleOnChange).toHaveBeenCalledTimes(1);
  });
});
