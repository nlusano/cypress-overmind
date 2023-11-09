import * as React from "react";
import { useAppState } from "../overmind";

const Todo = React.memo(({ id }) => {
  const todo = useAppState((state) => state.todosList[id]);
  const todoTitle = !todo.isDone ? todo.title : <s>{todo.title}</s>;

  return <li>{todoTitle}</li>;
});

export default Todo;
