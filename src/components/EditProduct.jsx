import React from "react";
import styles from "./EditProduct.module.css";
function EditProduct({ setShowEditProduct }) {
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h3>ویرایش اطلاعات</h3>

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
          <button onClick={() => setShowEditProduct(false)}>انصراف</button>
          <button>ثبت اطلاعات جدید</button>
        </div>
      </div>
    </div>
  );
}

export default EditProduct;
