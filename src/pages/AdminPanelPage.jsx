import React from "react";
import PanelHeader from "../components/PanelHeader";
import styles from "./AdminPanelPage.module.css";
import ProductsList from "../components/ProductsList";
function AdminPanelPage() {
  return (
    <div className={styles.container}>
      <PanelHeader />
      <ProductsList />
    </div>
  );
}

export default AdminPanelPage;
