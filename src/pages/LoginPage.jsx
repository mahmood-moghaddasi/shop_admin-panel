import React from "react";
import styles from "./LoginPage.module.css";
function LoginPage() {
  const submitHandler = () => {};
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.logo}>
          <img src="../../public/Union-svg.svg" alt="" />
          <p>فرم ورود</p>
        </div>
        <form onSubmit={submitHandler}>
          <input type="text" placeholder="نام کاربری" />
          <input type="text" placeholder="رمز عبور" />

          <button type="submit">ثبت نام</button>
        </form>
        <p className={styles.newUser}>ایجاد حساب کاربری</p>
      </div>
    </div>
  );
}

export default LoginPage;
