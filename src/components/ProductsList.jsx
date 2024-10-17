import React from "react";
import styles from "./ProductsList.module.css";
import { AiOutlineControl } from "react-icons/ai";
function ProductsList() {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <button>افزودن محصول</button>
        <div>
          <h1>مدیریت کالا</h1>
          <AiOutlineControl size={30} color="rgba(41, 45, 50, 1)" />
        </div>
      </div>
      {/* <div className={styles.table}></div> */}
      <table className={styles.table}>
        <tr>
          <th></th>
          <th>شناسه کالا</th>
          <th>قیمت</th>
          <th>موجودی</th>
          <th>نام کالا</th>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <button></button>
            <button></button>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default ProductsList;
