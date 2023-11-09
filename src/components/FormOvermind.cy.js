import { createOvermindMock } from "overmind";
import { Provider } from "overmind-react";
import { config } from "../overmind";
import FormOvermind from "./FormOvermind";

describe("<FormOvermind />", () => {
  it("should display validation err message if click on submit with empty form", () => {
    const overmind = createOvermindMock(config, (state) => {
      state.form.fname = "";
      state.form.lname = "";
      state.form.isValid = true;
    });

    cy.mount(
      <Provider value={overmind}>
        <FormOvermind />
      </Provider>
    );
    cy.get('input[type="submit"]').click();
    cy.get("div#validation")
      .should("be.visible")
      .and("have.text", "Could not submit");
  });
  it("should display validation err message if click on submit with empty first name", () => {
    const overmind = createOvermindMock(config, (state) => {
      state.form.fname = "";
      state.form.lname = "";
      state.form.isValid = true;
    });

    cy.mount(
      <Provider value={overmind}>
        <FormOvermind />
      </Provider>
    );
    cy.get("input#lname").type("Surname");
    cy.get('input[type="submit"]').click();
    cy.get("div#validation")
      .should("be.visible")
      .and("have.text", "Could not submit");
  });
});
