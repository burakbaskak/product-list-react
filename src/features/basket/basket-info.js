import { ReactComponent as ShoppingBag } from "../../assets/img/shopping-bag.svg";
import React from "react";
import { styled } from "@mui/system";
import { useBasketPrice } from "../../hooks/useBasketPrice";

const Container = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  display: "flex",
  flexDirection: "row",
  height: theme.mixins.toolbar.minHeight + 8,
  minWidth: 120,
  justifyContent: "center",
  alignItems: "center",
  color: "#FFF",
  fontSize: 14,
}));

const StyledIcon = styled(ShoppingBag)({ marginRight: 10 });

export const BasketInfo = () => {
  const { totalPrice } = useBasketPrice();
  return (
    <Container>
      <StyledIcon />
      <span>{`₺ ${totalPrice}`}</span>
    </Container>
  );
};
