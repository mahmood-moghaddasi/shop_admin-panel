import { useQuery } from "@tanstack/react-query";
import api from "../configs/api";

const getProducts = () => {
  const queryFn = () => api.get("products");
  const queryKey = ["products"];

  return useQuery({ queryFn, queryKey });
};
export { getProducts };
