import React, { useEffect, useState } from "react";
import PanelHeader from "../components/PanelHeader";
import styles from "./AdminPanelPage.module.css";
import ProductsList from "../components/ProductsList";
import AddProduct from "../components/AddProduct";
import EditProduct from "../components/EditProduct";
import api from "../configs/api";
import { useQuery } from "@tanstack/react-query";
import DeleteModal from "../components/DeleteModal";
function AdminPanelPage() {
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [showEditProduct, setShowEditProduct] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await api.get("products");
    return res;
  };
  const { data, isLoading } = useQuery({
    queryKey: ["data"],
    queryFn: fetch("http://localhost:3000/products").then((res) => res.json()),
  });
  console.log(data);

  return (
    <div className={styles.container}>
      <PanelHeader />
      <ProductsList
        setShowAddProduct={setShowAddProduct}
        setShowEditProduct={setShowEditProduct}
        products={products}
        isLoading={isLoading}
      />
      {showAddProduct && <AddProduct setShowAddProduct={setShowAddProduct} />}
      {showEditProduct && (
        <EditProduct setShowEditProduct={setShowEditProduct} />
      )}
      {showDeleteModal && <DeleteModal />}
    </div>
  );
}

export default AdminPanelPage;
