import { Toolbar } from "@mui/material";
import React from "react";
import { Header } from "./components/header";
import { ProductPage } from "./features/product/ProductPage";
import { styled } from "@mui/system";

const Div = styled("div")(({ theme }) => ({
  backgroundColor: "#E5E5E5",
}));

function App() {
  return (
    <Div>
      <Header />
      <Toolbar />
      <ProductPage />
    </Div>
  );
}

export default App;
