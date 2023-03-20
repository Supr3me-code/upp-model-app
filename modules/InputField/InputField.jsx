import React, { forwardRef } from "react";
import styles from "./InputField.module.css";

const InputField = forwardRef(
  ({ label, type, placeholder, ref, value, onChange, name }) => {
    return (
      <div className={styles["input-body"]}>
        <label className={styles["label"]}>{label}</label>
        <input
          name={name}
          ref={ref}
          className={styles["input-field"]}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    );
  }
);

export default InputField;
