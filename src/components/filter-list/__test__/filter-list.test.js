import { render, screen, fireEvent } from "@testing-library/react";
import { FilterList } from "../index";

describe("Filter List component", () => {
  it("should handle render with title prop", () => {
    render(<FilterList title="Product" />);
    expect(screen.getByText(/Product/i)).toBeInTheDocument();
  });

  it("calls onChange prop when item selected in list", () => {
    const handleOnChange = jest.fn();
    render(
      <FilterList
        onChange={handleOnChange}
        dataSource={[{ label: "test-checkbox", key: "key", itemCount: 0 }]}
      />
    );
    fireEvent.click(screen.getByRole("button"));
    expect(handleOnChange).toHaveBeenCalledTimes(1);
  });
});
