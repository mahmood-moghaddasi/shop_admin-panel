import React, { useEffect, useState } from "react";
import PanelHeader from "../components/PanelHeader";
import styles from "./AdminPanelPage.module.css";
import ProductsList from "../components/ProductsList";
import AddProduct from "../components/AddProduct";
import EditProduct from "../components/EditProduct";
import DeleteModal from "../components/DeleteModal";
function AdminPanelPage() {
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [showEditProduct, setShowEditProduct] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteProductId, setDeleteProductId] = useState("");

  return (
    <div className={styles.container}>
      <PanelHeader />
      <ProductsList
        setShowAddProduct={setShowAddProduct}
        setShowEditProduct={setShowEditProduct}
        setShowDeleteModal={setShowDeleteModal}
        setDeleteProductId={setDeleteProductId}
      />
      {showAddProduct && <AddProduct setShowAddProduct={setShowAddProduct} />}
      {showEditProduct && (
        <EditProduct setShowEditProduct={setShowEditProduct} />
      )}
      {showDeleteModal && (
        <DeleteModal
          setShowDeleteModal={setShowDeleteModal}
          deleteProductId={deleteProductId}
        />
      )}
    </div>
  );
}

export default AdminPanelPage;
