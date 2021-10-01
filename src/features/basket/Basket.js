import { Button } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { useBasket } from "../../hooks/useBasket";
import { useBasketPrice } from "../../hooks/useBasketPrice";
import { BasketItem } from "./basket-item";

const BasketWrapper = styled("div")(({ theme }) => ({
  borderColor: theme.palette.primary.main,
  borderWidth: 5,
  borderStyle: "solid",
  borderRadius: 2,
  backgroundColor: "#FFF",
  padding: 10,
  display: "flex",
  flexDirection: "column",
}));

const TotalButton = styled(Button)(({ theme }) => ({
  alignSelf: "flex-end",
  borderWidth: 2,
  borderColor: theme.palette.primary.main,
  "&:hover": {
    borderWidth: 2,
    borderColor: theme.palette.primary.main,
  },
}));

export const Basket = () => {
  const { basket } = useBasket();
  const { totalPrice } = useBasketPrice();

  return (
    <BasketWrapper>
      {basket.map((item) => (
        <BasketItem product={item} key={`basket-item-${item.slug}`} />
      ))}
      <TotalButton variant="outlined">₺ {totalPrice}</TotalButton>
    </BasketWrapper>
  );
};
