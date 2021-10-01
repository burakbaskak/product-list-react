import { render, screen } from "../../../utils/test-util";
import { Header } from "../index";

describe("amount component", () => {
  it("should have app logo", () => {
    render(<Header />);
    expect(screen.getByTestId("app-logo")).toBeInTheDocument();
  });
});
