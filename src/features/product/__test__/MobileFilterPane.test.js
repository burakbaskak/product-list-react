import { render, screen, fireEvent } from "../../../utils/test-util";
import { MobileFilterPane } from "../MobileFilterPane";

describe("mobile filter pane component", () => {
  it("can render", () => {
    render(<MobileFilterPane />);
    expect(screen.getByText(/Filter/i)).toBeInTheDocument();
  });

  it("can render dialog open when button clicked", () => {
    render(<MobileFilterPane />);
    fireEvent.click(screen.getByText(/Filter/i));
    expect(screen.getByLabelText("close")).toBeInTheDocument();
  });
});
