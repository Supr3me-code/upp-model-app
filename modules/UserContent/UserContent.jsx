import React from "react";
import styles from './UserContent.module.css';

const UserContent = ({ label, value }) => {
  return (
    <div className={styles['wrapper']}>
      <label className={styles['label']}>{label}</label>
      <span className={styles['value']}>{`₹${value}`}</span>
    </div>
  );
};

export default UserContent;
