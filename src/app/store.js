import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/product/productSlice";
import basketReducer from "../features/basket/basketSlice";
import { api } from "./services/api";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    product: productReducer,
    basket: basketReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
