import * as React from "react";
import { useAppState } from "../overmind";

const Todo = React.memo(({ id }) => {
  const todo = useAppState((state) => state.todos[id]);

  return <li>{todo.title}</li>;
});

export default Todo;
