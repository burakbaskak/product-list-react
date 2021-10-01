import { useMemo } from "react";
import { useSelector } from "react-redux";
import { selecFilteredProducts } from "../features/product/productSlice";

export const useProducts = () => {
  const products = useSelector(selecFilteredProducts);

  return useMemo(() => ({ products }), [products]);
};
