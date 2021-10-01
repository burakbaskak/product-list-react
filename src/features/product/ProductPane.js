import React from "react";
import { Pagination } from "../../components/pagination";
import { TagList } from "../../components/tag-list";
import { Title } from "../../components/title";
import { useProducts } from "../../hooks/useProducts";
import { useDispatch, useSelector } from "react-redux";
import {
  changeFilterItemType,
  changePage,
  selectPageCount,
} from "./productSlice";
import { useItemsQuery } from "../../app/services/api";
import { Grid } from "@mui/material";
import { ProductCard } from "./product-card";

export const ProductPane = () => {
  const { isLoading: productIsLoading } = useItemsQuery();
  const { products } = useProducts();
  const dispatch = useDispatch();
  const pageCount = useSelector(selectPageCount);

  const onPageChange = (page) => {
    dispatch(changePage(page));
  };

  const onItemTypeChange = (itemType) => {
    dispatch(changeFilterItemType(itemType));
  };
  return (
    <>
      <Title label="Products" />
      <TagList tags={["mug", "shirt"]} onChange={onItemTypeChange} />
      <Grid
        container
        sx={{
          marginTop: 1,
          backgroundColor: "white",
          padding: 3,
          justifyContent: "center",
        }}
      >
        {!productIsLoading &&
          products.map((item) => (
            <Grid
              item
              md={3}
              xs={6}
              sx={{ padding: 1 }}
              key={`grid-item-${item.slug}`}
            >
              <ProductCard product={item} />
            </Grid>
          ))}
        <Pagination onChange={onPageChange} pageCount={pageCount} />
      </Grid>
    </>
  );
};
