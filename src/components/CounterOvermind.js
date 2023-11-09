import React from "react";
import { useAppState, useActions } from "../overmind";

const CounterOvermind = () => {
  const { count } = useAppState();
  const { decrement, increment } = useActions();

  return (
    <div>
      <button data-cy="overmind-decrement" onClick={decrement}>
        -
      </button>
      <span data-cy="overmind-counter">{count}</span>
      <button data-cy="overmind-increment" onClick={increment}>
        +
      </button>
    </div>
  );
};

export default CounterOvermind;
