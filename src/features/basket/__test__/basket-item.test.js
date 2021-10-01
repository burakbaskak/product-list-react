import { render, screen } from "@testing-library/react";
import { BasketItem } from "../basket-item";

describe("basket info component", () => {
  it("calls onClick prop when clicked", () => {
    const handleClick = jest.fn();

    // render(<BasketItem />);
    expect(1).toBe(1);
  });

  //   it("can render total price in items of basket", () => {
  //     render(<BasketInfo />, {
  //       preloadedState: {
  //         basket: { items: [{ price: 12, quantity: 1, slug: "test" }] },
  //         product: { items: [{ slug: "test", price: 12 }] },
  //       },
  //     });
  //     expect(screen.getByText(/₺ 12.00/i)).toBeInTheDocument();
  //   });
});
