export class ElementsPage {
  visitElementsPage() {
    return cy.visit('/elements')
  }
  getHeaderValue() {
    return cy.get('.main-header').invoke('text').should('contain', 'Elements')
  }
}
export class Textbox {
  clickTextboxFromMenuList(value) {
    cy.get('.element-list').as('elementsGroup').invoke('attr', 'class').should('contain', 'show')
    return cy.get('@elementsGroup').find('.btn-light').contains(value.toString()).click()
  }
  enterFullName(name) {
    return cy.get('#userName').type(name)
  }
  enterEmail(email) {
    return cy.get('#userEmail').type(email)
  }
  enterCurrentAddress(address) {
    return cy.get('#currentAddress').type(address)
  }
  enterPermanentAddress(address) {
    return cy.get('#permanentAddress').type(address)
  }
  clickSubmitButton() {
    return cy.get('#submit').click()
  }
  verifyOutput(o) {
    return cy
      .get('#output')
      .should('exist')
      .within(() => {
        cy.get('#name').should('contain', o.name)
        cy.get('#email').should('contain', o.email)
        cy.get('#currentAddress').should('contain', o.address1)
        cy.get('#permanentAddress').should('contain', o.address2)
      })
  }
}
