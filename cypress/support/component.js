// ***********************************************************
// This example support/component.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";
// import { createOvermind } from "overmind";
// import { config } from "../../src/overmind";
// import { Provider } from "overmind-react";

import { mount } from "cypress/react18";

Cypress.Commands.add("mount", mount);

// Example use:
// cy.mount(<MyComponent />)

// Cypress.Commands.add("mount", (component, options = {}) => {
//   const { overmind = createOvermind(config), ...mountOptions } = options;

//   const wrapped = <Provider value={overmind}>{component}</Provider>;

//   return mount(wrapped, mountOptions);
// });
