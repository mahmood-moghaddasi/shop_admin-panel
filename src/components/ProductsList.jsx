import React from "react";
import styles from "./ProductsList.module.css";
import { AiOutlineControl } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { FaRegPenToSquare } from "react-icons/fa6";
function ProductsList({ setShowAddProduct, setShowEditProduct }) {
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
          <tr>
            <td>
              <button>
                <BsTrash size={20} color="rgba(244, 63, 94, 1)" />
              </button>
              <button onClick={() => setShowEditProduct(true)}>
                <FaRegPenToSquare size={20} color="rgba(74, 222, 128, 1)" />
              </button>
            </td>
            <td>asdfadfadf</td>
            <td>90 هزار</td>
            <td>239</td>
            <td>تیشرت</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default ProductsList;
