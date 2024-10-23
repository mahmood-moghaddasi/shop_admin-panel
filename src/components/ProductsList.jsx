import React from "react";
import styles from "./ProductsList.module.css";
import { AiOutlineControl } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { FaRegPenToSquare } from "react-icons/fa6";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getProduct } from "../services/Products";

function ProductsList({
  setShowAddProduct,
  setShowEditProduct,
  setShowDeleteModal,
  setDeleteProductId,
  setProductToEdit,
}) {
  const { data, isPending, error } = useQuery({
    queryKey: ["data"],
    queryFn: getProduct,
  });

  const deleteHandler = (id) => {
    setShowDeleteModal(true);
    setDeleteProductId(id);
  };
  const editHandler = (product) => {
    setProductToEdit(product);
    setShowEditProduct(true);
  };
  if (error) return <p>{error.message}</p>;
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <button onClick={() => setShowAddProduct(true)}>افزودن محصول</button>
        <div>
          <h1>مدیریت کالا</h1>
          <AiOutlineControl size={30} color="rgba(41, 45, 50, 1)" />
        </div>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <tr>
            <th></th>
            <th>شناسه کالا</th>
            <th>قیمت</th>
            <th>موجودی</th>
            <th>نام کالا</th>
          </tr>
          {isPending ? (
            <p>isloading</p>
          ) : (
            data.data.data.map((product) => (
              <tr key={product.id}>
                <td>
                  <button onClick={() => deleteHandler(product.id)}>
                    <BsTrash size={20} color="rgba(244, 63, 94, 1)" />
                  </button>
                  <button onClick={() => editHandler(product)}>
                    <FaRegPenToSquare size={20} color="rgba(74, 222, 128, 1)" />
                  </button>
                </td>
                <td>{product.id}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>{product.name}</td>
              </tr>
            ))
          )}
        </table>
      </div>
    </div>
  );
}

export default ProductsList;
