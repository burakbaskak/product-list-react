import React from "react";
import { Grid, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import { Basket } from "../basket/Basket";
import { FilterPane } from "./FilterPane";
import { ProductPane } from "./ProductPane";
import { MobileFilterPane } from "./MobileFilterPane";

export const ProductPage = () => {
  const smallDevice = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <Box sx={{ paddingLeft: 3, paddingRight: 3 }}>
      <Grid
        container
        spacing={2}
        sx={{ paddingTop: 4 }}
        flexDirection={smallDevice ? "column-reverse" : "row"}
      >
        {!smallDevice && (
          <Grid item md={3}>
            <FilterPane />
          </Grid>
        )}
        <Grid item md={6}>
          <ProductPane />
        </Grid>
        <Grid item md={3}>
          <Basket />
        </Grid>
        {smallDevice && <MobileFilterPane />}
      </Grid>
    </Box>
  );
};
