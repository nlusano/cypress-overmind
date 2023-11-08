import React, { useState } from "react";
import { useAppState, useActions } from "../overmind";

const CounterOvermind = () => {
  const { count } = useAppState();
  const { decrement, increment } = useActions();

  return (
    <div>
      <button data-cy="decrement" onClick={decrement}>
        -
      </button>
      <span data-cy="counter">{count}</span>
      <button data-cy="increment" onClick={increment}>
        +
      </button>
    </div>
  );
};

export default CounterOvermind;
