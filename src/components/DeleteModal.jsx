import React from "react";
import styles from "./DeleteModal.module.css";
import api from "../configs/api";
import { useMutation } from "@tanstack/react-query";
function DeleteModal({ setShowDeleteModal, deleteProductId }) {
  const mutationFn = (id) => api.delete(`products/${id}`);
  const { mutate } = useMutation({ mutationFn });

  const deleteHandler = () => {
    mutate(deleteProductId, {
      onSuccess: (data) => {
        console.log(data);
        setShowDeleteModal(false);
      },
      onError: (error) => {
        console.log(error.response.data.message);
      },
    });
  };
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <div className={styles.logo}>
          <img src="../../public/Close-icon.svg" alt="" />
        </div>
        <div className={styles.action}>
          <h3>آیا از حذف این محصول مطمئنید؟</h3>
          <div className={styles.buttons}>
            <button onClick={() => setShowDeleteModal(false)}>لغو</button>
            <button onClick={deleteHandler}>حذف</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
