import React, { useState } from "react";
import "./App.css";
import HooksRule from "./components/HooksRule";
import UseStateArray from "./components/UseStateArray";
import UseStateObject from "./components/UseStateObject";
import ShortCircuitEval from "./components/ShortCircuitEval";
import BasicForms from "./components/forms/BasicForms";
import UseEffect1 from "./components/useeffects/UseEffect1";
import UseEfect2 from "./components/useeffects/UseEfect2";
const App = () => {
  const [changeText, setText] = useState("Avinash Likes React");
  const changeHeading = () => {
    let val = changeText;
    val === "Avinash Likes React"
      ? setText("New Text post click")
      : setText("Avinash Likes React");
  };
  return (
    <div>
      {/* <UseEffect1/> */}
      <UseEfect2/>
      {/* <BasicForms/> */}
      {/* <ShortCircuitEval/> */}
      {/* <UseStateObject/> */}
      {/* <UseStateArray/> */}
      {/* <HooksRule/>
      <h1>{changeText}</h1>
      <button type="submit" onClick={changeHeading}>
        Click Me Please
      </button> */}
    </div>
  );
};

export default App;
