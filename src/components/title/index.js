import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

const StyledTitle = styled(Typography)({
  color: "#6F6F6F",
  marginBottom: 2,
});

export const Title = ({ label }) => {
  return <StyledTitle variant="subtitle1">{label}</StyledTitle>;
};
