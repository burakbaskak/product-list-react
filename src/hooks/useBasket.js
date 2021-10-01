import { useMemo } from "react";
import { useSelector } from "react-redux";
import { selectBasket } from "../features/basket/basketSlice";

export const useBasket = () => {
  const basket = useSelector(selectBasket);

  return useMemo(() => ({ basket }), [basket]);
};
