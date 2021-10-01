import React from "react";
import { Add, Remove } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { styled } from "@mui/system";

const AmountLabel = styled("div")(({ theme }) => ({
  //   ...theme.typography.button,
  backgroundColor: theme.palette.primary.main,
  color: "#FFF",
  padding: "3px 10px",
}));

const AmountProcess = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
}));

export const Amount = ({ count, onChange }) => {
  const onReduce = () => {
    onChange("reduce");
  };

  const onIncrease = () => {
    onChange("increase");
  };

  return (
    <AmountProcess aria-label="text button group">
      <IconButton
        color="primary"
        aria-label="reduce amount"
        component="span"
        size="small"
        onClick={onReduce}
      >
        <Remove />
      </IconButton>
      <AmountLabel>{count}</AmountLabel>
      <IconButton
        color="primary"
        aria-label="increase amount"
        size="small"
        component="span"
        onClick={onIncrease}
      >
        <Add />
      </IconButton>
    </AmountProcess>
  );
};
