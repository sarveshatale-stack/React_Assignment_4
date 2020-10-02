import React from "react";
import "./styles.css";
import Calculator from "./components/Calculator";
import "./components/Calculator.css";
import DigitalClock from "./components/DigitalClock";
export default function App() {
  return (
    <div className="App">
      {/* <Calculator /> */}
      <DigitalClock />
      {/* <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2> */}
    </div>
  );
}
