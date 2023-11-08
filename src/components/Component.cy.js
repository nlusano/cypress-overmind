import React from 'react'
import Component from './Component'

describe('<Component />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Component />)
  })
})