import * as React from "react";
import CounterReact from "./components/CounterReact";
import CounterOvermind from "./components/CounterOvermind";
import Todos from "./components/Todos";
import "./App.css";
import FormOvermind from "./components/FormOvermind";

const App = () => {
  return (
    <>
      <FormOvermind />
      <CounterReact />
      <CounterOvermind />
      <Todos />
    </>
  );
};

export default App;
