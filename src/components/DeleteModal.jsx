import React from "react";
import styles from "./DeleteModal.module.css";
function DeleteModal() {
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <div className={styles.logo}>
          <img src="../../public/Close-icon.svg" alt="" />
        </div>
        <div className={styles.action}>
          <h3>آیا از حذف این محصول مطمئنید؟</h3>
          <div className={styles.buttons}>
            <button>لغو</button>
            <button>حذف</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
