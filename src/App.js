import * as React from "react";
import CounterReact from "./components/CounterReact";
import "./App.css";
import CounterOvermind from "./components/CounterOvermind";

const App = () => {
  return (
    <div>
      <CounterReact />
      <CounterOvermind />
    </div>
  );
};

export default App;
