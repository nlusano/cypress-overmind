import * as React from "react";
import CounterReact from "./components/CounterReact";
import CounterOvermind from "./components/CounterOvermind";
import Todos from "./components/Todos";
import "./App.css";

const App = () => {
  return (
    <>
      <CounterReact />
      <CounterOvermind />
      <Todos />
    </>
  );
};

export default App;
