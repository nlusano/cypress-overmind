import { createOvermindMock, derived } from "overmind";
import { Provider } from "overmind-react";
import { config } from "../overmind";
import Todos from "./Todos";

describe("<Todos />", () => {
  beforeEach(() => {
    const overmind = createOvermindMock(config, (state) => {
      state.todos = [
        { id: 1, title: "Water the plants", isDone: true },
        { id: 2, title: "Do the dishes", isDone: true },
        { id: 3, title: "Go for a walk", isDone: false },
      ];
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
    cy.get("li").should("have.length", 3);
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
    cy.get("li").should(($li) => {
      expect($li).to.have.length(3);

      expect($li[0]).to.contain("Water the plants");
      expect($li[1]).to.contain("Do the dishes");
      expect($li[2]).to.contain("Go for a walk");
    });
  });
});
