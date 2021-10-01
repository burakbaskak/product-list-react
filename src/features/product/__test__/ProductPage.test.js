import { render, screen } from "../../../utils/test-util";
import { ProductPage } from "../ProductPage";

describe("product page component", () => {
  it("can render", () => {
    render(<ProductPage />);
    expect(screen.getByText(/Products/i)).toBeInTheDocument();
  });
});
