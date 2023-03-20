import React, { useContext } from "react";
import { AppContext } from "../../pages/_app";
import UserContent from "../UserContent/UserContent";
import styles from "./Output.module.css";

const Output = () => {
  const { income, age, outputObject } = useContext(AppContext);

  return (
    <div className={styles["body"]}>
      <div className={styles["heading"]}>UNPLANNED LIFE</div>
      <div className={styles["flexbox"]}>
        <UserContent label="Fixed Deposits" value={outputObject.fd} />
        <UserContent label="Saving Deposits" value={outputObject.saving} />
        <UserContent label="Cash" value={outputObject.cash} />
        <UserContent
          label="Health Insurance"
          value={outputObject.healthInsurance}
        />
        <UserContent
          label="Life Insurance"
          value={outputObject.lifeInsurance}
        />
      </div>
      <div className={styles["heading"]}>PRESENT LIFE</div>
      <div className={styles["flexbox"]}>
        <UserContent label="Needs" value={outputObject.needs} />
        <UserContent label="Desires" value={outputObject.desires} />
      </div>
      <div className={styles["heading"]}>PLANNED LIFE</div>
      <div className={styles["flexbox"]}>
        <UserContent
          label="Safe Instruments"
          value={outputObject.safeInstruments}
        />
        <UserContent label="Index Fund" value={outputObject.indexFund} />
        <UserContent label="Mid Cap" value={outputObject.midCap} />
        <UserContent label="Small Cap" value={outputObject.smallCap} />
      </div>
    </div>
  );
};

export default Output;
