import React, { useContext, useRef, useState } from "react";
import { AppContext } from "../../pages/_app";
import Button from "../Button/Button";
import InputField from "../InputField/InputField";
import styles from "./InputForm.module.css";

const InputForm = () => {
  const { income, age, setAge, setIncome, outputObject, setOutputObject } =
    useContext(AppContext);

  const [tempIncome, setTempIncome] = useState();
  const [tempAge, setTempAge] = useState();

  const numFor = Intl.NumberFormat('en-IN');

  const submitHandler = (event) => {
    event.preventDefault();
    setIncome(tempIncome);
    setAge(tempAge);
    console.log(income, "INCOME");
    console.log(age, "AGE");
    setOutputObject({
      fd: numFor.format((0.7*6*tempIncome).toFixed(1)),
      saving: numFor.format((0.2*6*tempIncome).toFixed(1)),
      cash: numFor.format((0.1*6*tempIncome).toFixed(1)),
      healthInsurance: numFor.format((6*tempIncome).toFixed(1)),
      lifeInsurance: numFor.format((20*12*tempIncome).toFixed(1)),
      needs: numFor.format((0.5*tempIncome).toFixed(1)),
      desires: numFor.format((0.3*tempIncome).toFixed(1)),
      safeInstruments: numFor.format(((tempAge/100)*(0.2*tempIncome)).toFixed(1)),
      indexFund: numFor.format(((1 - (tempAge/100))*(0.2*0.6*tempIncome)).toFixed(1)),
      midCap: numFor.format(((1 - (tempAge/100))*(0.2*0.25*tempIncome)).toFixed(1)),
      smallCap: numFor.format(((1 - (tempAge/100))*(0.2*0.15*tempIncome)).toFixed(1)),
    })
  };

  const resetHandler = () => {
    setIncome();
    setAge();
  };

  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <form
      onSubmit={submitHandler}
      onReset={resetHandler}
      className={styles["form"]}
    >
      <div className={styles["flex"]}>
        <InputField
          label="Monthly Income"
          placeholder="₹"
          type="number"
          value={income}
          onChange={(e) => {
            setTempIncome(e.target.value);
            // if (income && age) setIsDisabled(false);
            // else setIsDisabled(true);
          }}
          name="incomeField"
        />
        <InputField
          label="Age"
          placeholder=""
          type="number"
          value={age}
          onChange={(e) => {
            setTempAge(e.target.value);
            // if (income && age) setIsDisabled(false);
            // else setIsDisabled(true);
          }}
          name="ageField"
        />
      </div>
      <div className={styles["flex"]}>
        <Button label="Calculate" type="submit" disabled={isDisabled} />
        <Button label="Reset" type="reset" />
      </div>
    </form>
  );
};

export default InputForm;
