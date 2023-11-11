import { createOvermindMock, derived } from "overmind";
import { Provider } from "overmind-react";
import { config } from "../overmind";
import Todos from "./Todos";

describe("<Todos /> testing toggle logic in one go", () => {
  const todoList = [
    { id: 1, title: "Water the plants", isDone: true },
    { id: 2, title: "Do the dishes", isDone: true },
    { id: 3, title: "Go for a walk", isDone: false },
  ];
  beforeEach(() => {
    const overmind = createOvermindMock(config, (state) => {
      state.todos = todoList;
      state.todosList = derived((state) => {
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
      });
      state.showAllTodos = true;
    });

    cy.mount(
      <Provider value={overmind}>
        <Todos />
      </Provider>
    );
  });

  it("should display the full list on mount", () => {
    cy.get("li").should((list) => {
      expect(list).to.have.length(3);
      expect(list[0]).to.contain.text("Water the plants");
      expect(list[1]).to.contain.text("Do the dishes");
      expect(list[2]).to.contain.text("Go for a walk");
    });
  });

  it("should toggle the list filter when clicking on the checkbox", () => {
    cy.get("input[type=checkbox]")
      .should("not.be.checked")
      .check()
      .should("be.checked");
    cy.get("li").should(($li) => {
      expect($li).to.have.length(1);
      expect($li).to.have.text("Go for a walk");
    });
    cy.get("input[type=checkbox]")
      .should("be.checked")
      .uncheck()
      .should("not.be.checked");
    cy.get("li")
      .then(($li) => {
        expect($li).to.have.length(todoList.length);
      })
      .each(($li, index) => {
        expect($li).to.contain.text(todoList[index].title);
      });
  });
});

describe("<Todos /> testing check/uncheck separately by updating initial state via overmind actions", () => {
  const todoList = [
    { id: 1, title: "Water the plants", isDone: true },
    { id: 2, title: "Do the dishes", isDone: true },
    { id: 3, title: "Go for a walk", isDone: false },
  ];
  beforeEach(() => {
    const overmind = createOvermindMock(config, (state) => {
      state.todos = todoList;
      state.todosList = derived((state) => {
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
      });
      state.showAllTodos = true;
    });

    cy.mount(
      <Provider value={overmind}>
        <Todos />
      </Provider>
    );
  });

  it("should display the full list on mount", () => {
    cy.get("li").should((list) => {
      expect(list).to.have.length(3);
      expect(list[0]).to.contain.text("Water the plants");
      expect(list[1]).to.contain.text("Do the dishes");
      expect(list[2]).to.contain.text("Go for a walk");
    });
  });

  it("should filter the list when checking the checkbox", () => {
    const overmind = createOvermindMock(config, (state) => {
      state.todos = todoList;
      state.todosList = derived((state) => {
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
      });
      state.showAllTodos = true;
    });

    cy.mount(
      <Provider value={overmind}>
        <Todos />
      </Provider>
    );

    cy.get("input[type=checkbox]")
      .should("not.be.checked")
      .check()
      .should("be.checked");
    cy.get("li").should(($li) => {
      expect($li).to.have.length(1);
      expect($li).to.have.text("Go for a walk");
    });
  });

  it("should unfilter the list filter when unchecking the checkbox", () => {
    const overmind = createOvermindMock(config, (state) => {
      state.todos = todoList;
      state.todosList = derived((state) => {
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
      });
      state.showAllTodos = true; // set initial state
    });
    overmind.actions.toggleFilter(); // check via actions instead of UI

    cy.mount(
      <Provider value={overmind}>
        <Todos />
      </Provider>
    );

    cy.get("input[type=checkbox]")
      .should("be.checked")
      .uncheck()
      .should("not.be.checked");
    cy.get("li")
      .then(($li) => {
        expect($li).to.have.length(todoList.length);
      })
      .each(($li, index) => {
        expect($li).to.contain.text(todoList[index].title);
      });
  });
});
