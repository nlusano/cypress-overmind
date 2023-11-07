import React, { useState } from "react";
import { useAppState, useActions } from "../overmind";

const Counter = () => {
  // const [count, setCount] = useState(0);
  const { count } = useAppState();
  const { decrement, increment } = useActions();

  return (
    <div>
      <button onClick={decrement}>-</button>
      {count}
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
