import React, { useState } from "react";
import styles from "./AddProduct.module.css";
function AddProduct({ setShowAddProduct }) {
  const [product, setProduct] = useState({
    name: "",
    count: "",
    price: "",
  });
  const changeHandler = (event) => {
    setProduct({ ...form, [event.target.name]: event.target.value });
  };
  const submitHandler = (event) => {
    event.preventDefault();

    if (!product.name || !product.count || !product.price)
      return alert("fill all of inputs");
  };
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h3>ایجاد محصول جدید</h3>

        <form onSubmit={submitHandler} className={styles.inputs}>
          <div>
            <label htmlFor="">نام کالا</label>
            <input
              onChange={changeHandler}
              name="name"
              type="text"
              value={product.name}
              placeholder="نام کالا"
            />
          </div>
          <div>
            <label htmlFor="">تعداد موجودی</label>
            <input
              onChange={changeHandler}
              name="count"
              type="text"
              value={product.count}
              placeholder="تعداد موجودی"
            />
          </div>
          <div>
            <label htmlFor="">قیمت</label>
            <input
              onChange={changeHandler}
              name="price"
              type="text"
              value={product.value}
              placeholder="قیمت"
            />
          </div>
        </form>
        <div className={styles.buttons}>
          <button onClick={() => setShowAddProduct(false)}>انصراف</button>
          <button type="submit">ایجاد</button>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
