import { derived } from "overmind";

export type AppState = {
  count: number;
  todos: {
    id: number;
    title: string;
    isDone: boolean;
  }[];
  todosList: {
    [id: number]: {
      id: number;
      title: string;
      isDone: boolean;
    };
  };
  showAllTodos: boolean;
  form: {
    fname: string;
    lname: string;
    isValid: boolean;
    validationErr: string;
  };
};

export const state: AppState = {
  count: 0,
  todos: [
    { id: 1, title: "Create tiny project", isDone: true },
    { id: 2, title: "Add cypress to the project", isDone: true },
    { id: 3, title: "Play around with component testing", isDone: true },
    { id: 4, title: "Water plants", isDone: false },
    { id: 5, title: "Wash dishes", isDone: false },
    { id: 6, title: "Study docs", isDone: true },
  ],
  todosList: derived((state: AppState) => {
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
