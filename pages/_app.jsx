import "../styles/globals.css";
import Header from "../modules/Header/Header";
import Footer from "../modules/Footer/Footer";
import { createContext, useEffect, useRef, useState } from "react";
import InputForm from "../modules/InputForm/InputForm";
import Output from "../modules/Output/Output";

export const AppContext = createContext();

function MyApp() {
  const [income, setIncome] = useState();
  const [age, setAge] = useState();
  return (
    <AppContext.Provider value={{income, setIncome, age, setAge}}>
      <Header />
      <InputForm />
      <Output />
      <Footer />
    </AppContext.Provider>
  );
}

export default MyApp;
