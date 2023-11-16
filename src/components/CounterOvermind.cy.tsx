import { createOvermindMock } from "overmind";
import { Provider } from "overmind-react";
import React from "react";
import { config } from "../overmind";
import CounterOvermind from "./CounterOvermind";

describe("<CounterOvermind />", () => {
  it("when the increment button is pressed, the counter is incremented", () => {
    const overmind = createOvermindMock(config, (state) => {
      state.count = 15;
    });

    cy.mount(
      <Provider value={overmind}>
        <CounterOvermind />
      </Provider>
    );
    cy.get("[data-cy=overmind-increment]").click();
    cy.get("[data-cy=overmind-counter]").should("have.text", "16");
  });
});
