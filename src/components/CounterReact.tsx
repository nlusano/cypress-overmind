import React, { useState } from "react";

const CounterReact = (props: any) => {
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
      <span data-cy="greeter">{`Hello ${name}! Try this awesome react counter`}</span>
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
