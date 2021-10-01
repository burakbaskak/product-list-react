import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import productReducer from "../features/product/productSlice";
import basketReducer from "../features/basket/basketSlice";
import { api } from "../app/services/api";
import { ThemeProvider } from "@mui/material";
import theme from "../theme";

function render(
  ui,
  {
    preloadedState,
    store = configureStore({
      reducer: {
        [api.reducerPath]: api.reducer,
        product: productReducer,
        basket: basketReducer,
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
      preloadedState,
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </Provider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };
