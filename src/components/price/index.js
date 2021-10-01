import { styled } from "@mui/system";
import React from "react";

const Div = styled("div", { shouldForwardProp: (prop) => prop !== "bold" })(
  ({ theme, bold }) => ({
    color: theme.palette.primary.main,
    fontWeight: bold ? 500 : 700,
    fontSize: 14,
  })
);

export const Price = ({ label, bold }) => {
  return <Div bold={bold}>{`₺ ${label}`}</Div>;
};
