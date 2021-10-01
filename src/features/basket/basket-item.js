import { styled } from "@mui/system";
import React from "react";
import { useDispatch } from "react-redux";
import { Amount } from "../../components/amount";
import { Price } from "../../components/price";
import { changeQuantity } from "./basketSlice";

const ProductInfoWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
}));

const Wrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  fontSize: 14,
  padding: 10,
  margin: 10,
  borderBottom: "1px solid #ccc",
}));

export const BasketItem = ({ product: { quantity, slug, name, price } }) => {
  const dispatch = useDispatch();

  const onAmountChange = (type) => {
    dispatch(changeQuantity({ slug, amount: type === "reduce" ? -1 : 1 }));
  };

  return (
    <Wrapper data-testid="product-item">
      <ProductInfoWrapper>
        <p>{name}</p>
        <Price bold={false} label={price} />
      </ProductInfoWrapper>

      <Amount count={quantity} onChange={onAmountChange} />
    </Wrapper>
  );
};
