import { Avatar, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { useDispatch } from "react-redux";
import productLogo from "../../assets/img/product.jpg";
import { Price } from "../../components/price";
import { addToBasket } from "../basket/basketSlice";

const Div = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  height: "100%",
  justifyContent: "space-between",
  gap: 10,
}));

const ImageWrapper = styled("div")({
  padding: 16,
  border: "1.17666px solid #F3F0FE",
  display: "flex",
  justifyContent: "center",
  borderRadius: 12,
});

const AddButton = styled(Button)(({ theme }) => ({
  color: "#FFF",
  height: 22,
  fontSize: 12,
}));

export const ProductCard = ({ product: { name, price, slug } }) => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(addToBasket({ name, price, slug }));
  };

  return (
    <Div>
      <ImageWrapper>
        <Avatar
          variant="square"
          sx={{ width: "100%", height: 92 }}
          src={productLogo}
        />
      </ImageWrapper>
      <Price label={price} />
      <Typography sx={{ flexGrow: 1 }}>{name}</Typography>
      <AddButton variant="contained" onClick={onClick}>
        Add
      </AddButton>
    </Div>
  );
};
