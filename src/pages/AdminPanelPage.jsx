import React, { useState } from "react";
import PanelHeader from "../components/PanelHeader";
import styles from "./AdminPanelPage.module.css";
import ProductsList from "../components/ProductsList";
import AddProduct from "../components/AddProduct";
import EditProduct from "../components/EditProduct";
function AdminPanelPage() {
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [showEditProduct, setShowEditProduct] = useState(false);

  return (
    <div className={styles.container}>
      <PanelHeader />
      <ProductsList
        setShowAddProduct={setShowAddProduct}
        setShowEditProduct={setShowEditProduct}
      />
      {showAddProduct && <AddProduct setShowAddProduct={setShowAddProduct} />}
      {showEditProduct && (
        <EditProduct setShowEditProduct={setShowEditProduct} />
      )}
    </div>
  );
}

export default AdminPanelPage;
