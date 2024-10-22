import React from "react";
import styles from "./RegistrationPage.module.css";
function RegistrationPage() {
  const submitHandler = () => {};
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.logo}>
          <img src="../../public/Union-svg.svg" alt="" />
          <p>فرم ثبت نام</p>
        </div>
        <form onSubmit={submitHandler}>
          <input type="text" placeholder="نام کاربری" />
          <input type="text" placeholder="رمز عبور" />
          <input type="text" placeholder="تکرار رمز عبور" />
          <button type="submit">ثبت نام</button>
        </form>
      </div>
    </div>
  );
}

export default RegistrationPage;
