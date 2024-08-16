import React from "react";
import styles from "./Form.module.css";


function Form({ header, children, onSubmitHandler }) {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.header}>{header}</h1>
      <form className={styles.form} onSubmit={onSubmitHandler}>
        {children}
      </form>
    </div>
  );
}

export default Form;
