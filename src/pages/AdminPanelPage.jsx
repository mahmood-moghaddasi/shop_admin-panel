import React, { useState } from "react";
import PanelHeader from "../components/PanelHeader";
import styles from "./AdminPanelPage.module.css";
import ProductsList from "../components/ProductsList";
import AddProduct from "../components/AddProduct";
function AdminPanelPage() {
  const [showAddProduct, setShowAddProduct] = useState(false);
  return (
    <div className={styles.container}>
      <PanelHeader />
      <ProductsList setShowAddProduct={setShowAddProduct} />
      {showAddProduct && <AddProduct setShowAddProduct={setShowAddProduct} />}
    </div>
  );
}

export default AdminPanelPage;
