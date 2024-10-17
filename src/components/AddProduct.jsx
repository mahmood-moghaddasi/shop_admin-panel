import React from "react";
import styles from "./AddProduct.module.css";
function AddProduct({ setShowAddProduct }) {
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h3>ایجاد محصول جدید</h3>

        <div className={styles.inputs}>
          <div>
            <label htmlFor="">نام کالا</label>
            <input type="text" placeholder="نام کالا" />
          </div>
          <div>
            <label htmlFor="">تعداد موجودی</label>
            <input type="text" placeholder="تعداد موجودی" />
          </div>
          <div>
            <label htmlFor="">قیمت</label>
            <input type="text" placeholder="قیمت" />
          </div>
        </div>
        <div className={styles.buttons}>
          <button onClick={() => setShowAddProduct(false)}>انصراف</button>
          <button>ایجاد</button>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
