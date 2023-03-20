import React, { useContext } from "react";
import { AppContext } from "../../pages/_app";
import UserContent from "../UserContent/UserContent";
import styles from "./Output.module.css";

const Output = () => {
  const { income, age, outputObject } = useContext(AppContext);

  return (
    <div className={styles["body"]}>
      <div className={styles["heading"]}>
        UNPLANNED LIFE (Emergency Fund, Health & Life insurance)
      </div>
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
      <div className={styles["heading"]}>
        PRESENT LIFE (Monthly expenditure)
      </div>
      <div className={styles["flexbox"]}>
        <UserContent label="Needs" value={outputObject.needs} />
        <UserContent label="Desires" value={outputObject.desires} />
      </div>
      <div className={styles["heading"]}>PLANNED LIFE (Monthly Investments)</div>
      <div className={styles["flexbox"]}>
        <UserContent
          label="Safe Instruments(Bonds, EPF, Gold etc.)"
          value={outputObject.safeInstruments}
        />
        <UserContent label="Index Fund (Nifty/Sensex)" value={outputObject.indexFund} />
        <UserContent label="Mid Cap Index Fund" value={outputObject.midCap} />
        <UserContent label="Small Cap Index Fund" value={outputObject.smallCap} />
      </div>
    </div>
  );
};

export default Output;
