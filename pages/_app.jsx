import Header from "../modules/Header/Header";
import Footer from "../modules/Footer/Footer";
import { createContext, useEffect, useRef, useState } from "react";
import InputForm from "../modules/InputForm/InputForm";
import Output from "../modules/Output/Output";

export const AppContext = createContext();

function MyApp() {
  const [income, setIncome] = useState();
  const [age, setAge] = useState();
  const outputObject = {
    fd: 0,
    saving: 0,
    cash: 0,
    healthInsurance: 0,
    lifeInsurance: 0,
    needs: 0,
    desires: 0,
    safeInstruments: 0,
    indexFund: 0,
    midCap: 0,
    smallCap: 0,
  };

  return (
    <AppContext.Provider
      value={{ income, setIncome, age, setAge, outputObject }}
    >
      <Header />
      <InputForm />
      <Output />
      <Footer />
    </AppContext.Provider>
  );
}

export default MyApp;
