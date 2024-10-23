import React, { useState } from "react";
import styles from "./AddProduct.module.css";
import { useMutation } from "@tanstack/react-query";
import api from "../configs/api";
function AddProduct({ setShowAddProduct }) {
  const [product, setProduct] = useState({
    name: "",
    quantity: "",
    price: "",
  });

  const mutationFn = (data) => api.post("/products", data);

  const { mutate } = useMutation({ mutationFn });

  console.log(product);
  const changeHandler = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    console.log("hi");

    if (!product.name || !product.quantity || !product.price)
      return alert("fill all of inputs");

    mutate(product, {
      onSuccess: (data) => {
        console.log(data);
        setShowAddProduct(false);
      },
      onError: (error) => {
        console.log(error.response.data.message);
      },
    });
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
              name="quantity"
              type="text"
              value={product.quantity}
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
          <div className={styles.buttons}>
            <button onClick={() => setShowAddProduct(false)}>انصراف</button>
            <button type="submit">ایجاد</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
