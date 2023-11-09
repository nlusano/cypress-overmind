import { derived } from "overmind";

export const state = {
  count: 0,
  todos: [
    { id: 1, title: "Create tiny project", isDone: true },
    { id: 2, title: "Add cypress to the project", isDone: true },
    { id: 3, title: "Play around with component testing", isDone: true },
    { id: 4, title: "Water plants", isDone: false },
    { id: 5, title: "Wash dishes", isDone: false },
    { id: 6, title: "Study docs", isDone: true },
  ],
  todosList: derived((state) => {
    const list = state.showAllTodos
      ? state.todos
      : state.todos.filter((todo) => !todo.isDone);
    return list.reduce(
      (obj, i) => ({
        ...obj,
        [i.id]: i,
      }),
      {}
    );
  }),
  showAllTodos: true,
  form: {
    fname: "",
    lname: "",
    isValid: true,
    validationErr: "",
  },
};
