import * as React from "react";
import { useAppState } from "../overmind";
import Todo from "./Todo";

const Todos = () => {
  const state = useAppState();

  return (
    <ul>
      {Object.keys(state.todos).map((id) => (
        <Todo key={id} id={id} />
      ))}
    </ul>
  );
};

export default Todos;
