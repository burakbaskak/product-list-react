import { render, screen } from "@testing-library/react";
import { Title } from "../index";

describe("title component", () => {
  it("should handle render with label prop", () => {
    render(<Title label="Title" />);
    expect(screen.getByText(/Title/i)).toBeInTheDocument();
  });
});
