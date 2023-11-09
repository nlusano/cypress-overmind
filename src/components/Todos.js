import * as React from "react";
import { useActions, useAppState } from "../overmind";
import Todo from "./Todo";

const Todos = () => {
  const state = useAppState();
  const { toggleFilter } = useActions();

  const handleToggle = () => {
    toggleFilter();
  };

  return (
    <div id="todolist">
      <h3>Todo list:</h3>
      <label>See pending only</label>
      <input
        type="checkbox"
        id="checkbox"
        name="checkbox"
        checked={!state.showAllTodos}
        onClick={() => handleToggle()}
      />
      <ul>
        {Object.keys(state.todosList).map((id) => (
          <Todo key={id} id={id} />
        ))}
      </ul>
    </div>
  );
};

export default Todos;
