import api from "../configs/api";

const getProduct = () => api.get("products");
export { getProduct };
