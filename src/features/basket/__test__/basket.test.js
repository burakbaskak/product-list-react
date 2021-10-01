import { render, screen, fireEvent } from "../../../utils/test-util";
import { Basket } from "../Basket";
describe("basket component", () => {
  it("can render with redux defaults", async () => {
    render(<Basket />);
    const basketItems = await screen.queryAllByTestId("product-item");
    expect(basketItems.length).toBe(0);
  });

  it("can render items in basket", async () => {
    render(<Basket />, {
      preloadedState: {
        basket: { items: [{ price: 12, quantity: 1, slug: "test" }] },
        product: { items: [{ slug: "test", price: 12 }] },
      },
    });
    const basketItems = await screen.queryAllByTestId("product-item");
    expect(basketItems.length).toBe(1);
  });
});
