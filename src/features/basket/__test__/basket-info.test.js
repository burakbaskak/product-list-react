import { render, screen } from "../../../utils/test-util";
import { BasketInfo } from "../basket-info";

describe("basket info component", () => {
  it("can render with redux defaults", () => {
    render(<BasketInfo />);
    expect(screen.getByText(/₺/i)).toBeInTheDocument();
  });

  it("can render total price in items of basket", () => {
    render(<BasketInfo />, {
      preloadedState: {
        basket: { items: [{ price: 12, quantity: 1, slug: "test" }] },
        product: { items: [{ slug: "test", price: 12 }] },
      },
    });
    expect(screen.getByText(/₺ 12.00/i)).toBeInTheDocument();
  });
});
