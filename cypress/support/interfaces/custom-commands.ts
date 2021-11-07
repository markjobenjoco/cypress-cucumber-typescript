declare namespace Cypress {
  interface Chainable {
    /**
     * Return the text value on the current page header
     *
     * @example
     * cy.getHeaderValue().should('eq', 'header-name')
     */
    getHeaderValue(): Chainable<string>
  }
}
