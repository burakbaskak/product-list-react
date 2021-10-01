import { useMemo } from "react";
import { useSelector } from "react-redux";
import { selectTotalPrice } from "../features/basket/basketSlice";

export const useBasketPrice = () => {
  const totalPrice = useSelector(selectTotalPrice);

  return useMemo(() => ({ totalPrice }), [totalPrice]);
};
