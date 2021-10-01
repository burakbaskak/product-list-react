import { render, screen } from "../../../utils/test-util";
import { Price } from "../index";

describe("price component", () => {
  it("should handle render with label prop", () => {
    render(<Price label="12" />);
    expect(screen.getByText(/₺ 12/i)).toBeInTheDocument();
  });
});
