import React from "react";
import CounterReact from "./CounterReact";

describe("<CounterReact />", () => {
  it("mounts", () => {
    cy.mount(<CounterReact />);
    cy.get("[data-cy=counter]").should("have.text", "0");
  });

  it("mounts with initial values (user name and counter initial val)", () => {
    cy.mount(<CounterReact name={"Nausicaa"} initialCount={100} />);
    cy.get("[data-cy=greeter]").should("have.text", "Hello Nausicaa!!");
    cy.get("[data-cy=counter]").should("have.text", "100");
  });

  it("clicking + fires a change event with the incremented value", () => {
    const onChangeSpy = cy.spy().as("onChangeSpy");
    cy.mount(<CounterReact onChange={onChangeSpy} />);
    cy.get("[data-cy=increment]").click();
    cy.get("@onChangeSpy").should("have.been.calledWith", 1);
  });

  it("clicking - fires a change event with the decremented value", () => {
    const onChangeSpy = cy.spy().as("onChangeSpy");
    cy.mount(<CounterReact onChange={onChangeSpy} />);
    cy.get("[data-cy=decrement]").click();
    cy.get("@onChangeSpy").should("have.been.calledWith", -1);
  });

  it("when the increment button is pressed, the counter is incremented", () => {
    cy.mount(<CounterReact />);
    cy.get("[data-cy=increment]").click();
    cy.get("[data-cy=counter]").should("have.text", "1");
  });

  it("when the decrement button is pressed, the counter is decremented", () => {
    cy.mount(<CounterReact />);
    cy.get("[data-cy=decrement]").click();
    cy.get("[data-cy=counter]").should("have.text", "-1");
  });
});
