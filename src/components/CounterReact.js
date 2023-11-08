import React, { useState } from "react";

const CounterReact = (props) => {
  const { name = "user", initialCount = 0, onChange = () => {} } = props;
  const [count, setCount] = useState(initialCount);

  const handleDecrement = () => {
    const newCount = count - 1;
    setCount(newCount);
    onChange(newCount);
  };
  const handleIncrement = () => {
    const newCount = count + 1;
    setCount(newCount);
    onChange(newCount);
  };

  return (
    <div>
      <span data-cy="greeter">{`Hello ${name}!!`}</span>
      <button data-cy="decrement" onClick={handleDecrement}>
        -
      </button>
      <span data-cy="counter">{count}</span>
      <button data-cy="increment" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
};

export default CounterReact;
