import basketReducer, {
  addToBasket,
  changeQuantity,
  selectTotalPrice,
} from "../basketSlice";

describe("basket reducer", () => {
  const initialState = { items: [] };
  const product = { name: "Product 1", slug: "product-1", price: 13 };

  it("should handle add to basket", () => {
    const actual = basketReducer(initialState, addToBasket(product));
    expect(
      actual.items.filter((item) => item.slug === "product-1").length
    ).toBe(1);
  });

  it("should handle item quantity in basket", () => {
    const addedState = basketReducer(initialState, addToBasket(product));

    const actual = basketReducer(
      addedState,
      changeQuantity({ slug: "product-1", amount: 1 })
    );
    expect(actual.items[0].quantity).toBe(2);
  });

  it("should handle item removed", () => {
    const addedState = basketReducer(initialState, addToBasket(product));

    const actual = basketReducer(
      addedState,
      changeQuantity({ slug: "product-1", amount: -1 })
    );
    expect(actual.items.length).toBe(0);
  });

  it("should handle basket total price", () => {
    const addedState = basketReducer(initialState, addToBasket(product));
    const actual = basketReducer(
      addedState,
      changeQuantity({ slug: "product-1", amount: 2 })
    );

    expect(
      selectTotalPrice({ basket: actual, product: { items: [product] } })
    ).toBe("39.00");
  });
});
