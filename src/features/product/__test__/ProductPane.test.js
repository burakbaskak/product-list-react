import { render, screen } from "../../../utils/test-util";
import { ProductPane } from "../ProductPane";

describe("product pane component", () => {
  it("can render", () => {
    render(<ProductPane />);
    expect(screen.getByText(/Products/i)).toBeInTheDocument();
  });
});
