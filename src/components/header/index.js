import React from "react";
import { ReactComponent as AppLogo } from "../../assets/img/logo.svg";
import { AppBar, Toolbar } from "@mui/material";
import { styled } from "@mui/system";
import { BasketInfo } from "../../features/basket/basket-info";

const StyledLogo = styled(AppLogo)({
  flex: 1,
});

export const Header = ({ title }) => {
  // const classes = useStyles();
  return (
    <AppBar>
      <Toolbar>
        <StyledLogo data-testid="app-logo" />
        <BasketInfo />
      </Toolbar>
    </AppBar>
  );
};
