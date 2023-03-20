import React, { useContext } from "react";
import { AppContext } from "../../pages/_app";
import UserContent from "../UserContent/UserContent";
import styles from "./Output.module.css";

const Output = () => {
  const { income, age } = useContext(AppContext);

  return (
    <div className={styles['body']}>
      UNPLANNED LIFE
      <div className={styles["flexbox"]}>
        <UserContent label="Fixed Deposits" value={income} />
        <UserContent label="Saving Deposits" value={age} />
        <UserContent label="Cash" value={5084} />
        <UserContent label="Health Insurance" value={5084} />
        <UserContent label="Life Insurance" value={5084} />
      </div>
      PRESENT LIFE
      <div className={styles["flexbox"]}>
        <UserContent label="Needs" value={5084} />
        <UserContent label="Desires" value={5084} />
      </div>
      PLANNED LIFE
      <div className={styles["flexbox"]}>
        <UserContent label="Safe Instruments" value={5084} />
        <UserContent label="Index Fund" value={5084} />
        <UserContent label="Mid Cap" value={5084} />
        <UserContent label="Small Cap" value={5084} />
      </div>
    </div>
  );
};

export default Output;
