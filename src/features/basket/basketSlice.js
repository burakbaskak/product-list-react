import { createSlice } from "@reduxjs/toolkit";

const basket = createSlice({
  name: "basket",
  initialState: { items: [] },
  reducers: {
    addToBasket: (state, { payload }) => {
      const index = state.items.findIndex((item) => item.slug === payload.slug);

      if (index >= 0) {
        state.items[index].quantity = state.items[index].quantity + 1;
      } else {
        state.items.push({ ...payload, quantity: 1 });
      }
    },
    changeQuantity: (state, { payload: { slug, amount } }) => {
      const index = state.items.findIndex((item) => item.slug === slug);
      state.items[index].quantity = state.items[index].quantity + amount;
      if (state.items[index].quantity <= 0) {
        state.items = state.items.filter((item) => item.slug !== slug);
      }
    },
  },
});

export default basket.reducer;
export const { addToBasket, changeQuantity } = basket.actions;

export const selectTotalPrice = (state) => {
  return state.basket.items
    .map((basket) => {
      let item = state.product.items.find((item) => item.slug === basket.slug);
      return item.price * basket.quantity;
    })
    .reduce((a, b) => a + b, 0)
    .toFixed(2);
};

export const selectBasket = (state) => state.basket.items;
