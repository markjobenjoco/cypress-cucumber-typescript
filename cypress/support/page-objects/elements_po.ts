interface Person {
  name: string
  email: string
  address1: string
  address2: string
}
export class ElementsPage {
  visitElementsPage() {
    return cy.visit('/elements')
  }
  getHeaderValue() {
    return cy.get('.main-header').invoke('text').should('contain', 'Elements')
  }
  clickTextboxFromMenuList(value: string) {
    if (!value) throw new Error('Arguments pass should not be empty!')
    cy.get('.element-list').as('elementsGroup').invoke('attr', 'class').should('contain', 'show')
    return cy.get('@elementsGroup').find('.btn-light').contains(value.toString()).click()
  }
}

export class Textbox {
  enterFullName(name: string) {
    if (!name) throw new Error('Arguments pass should not be empty!')
    return cy.get('#userName').type(name)
  }
  enterEmail(email: string) {
    if (!email) throw new Error('Arguments pass should not be empty!')
    return cy.get('#userEmail').type(email)
  }
  enterCurrentAddress(address: string) {
    if (!address) throw new Error('Arguments pass should not be empty!')
    return cy.get('#currentAddress').type(address)
  }
  enterPermanentAddress(address: string) {
    if (!address) throw new Error('Arguments pass should not be empty!')
    return cy.get('#permanentAddress').type(address)
  }
  clickSubmitButton() {
    return cy.get('#submit').click()
  }
  verifyOutput(object: Person) {
    return cy
      .get('#output')
      .should('exist')
      .within(() => {
        cy.get('#name').should('contain', object.name)
        cy.get('#email').should('contain', object.email)
        cy.get('#currentAddress').should('contain', object.address1)
        cy.get('#permanentAddress').should('contain', object.address2)
      })
  }
}

export class Checkbox {
  clickOnExpandButton() {
    return cy.get('.rct-option-expand-all').click()
  }
  verifyListLength(x: number) {
    return cy.get('.rct-text').its('length').should('eq', x)
  }
  clickRdoOption(value: string) {
    return cy.get('.rct-text').contains(value).as('checkField').click()
  }
  isChecked() {
    return cy.get('@checkField').find('.rct-checkbox > .rct-icon').invoke('attr', 'class').should('contain', 'rct-icon-check')
  }
}

export class RadioButtons {
  verifyHeaderValue() {
    return cy.get('.main-header').should('contain', 'Radio Button')
  }
  clickOnEnabledRadioButton(value: string) {
    return cy.get('.custom-radio').not('.disabled').contains(value).as('enabledRdoBtn').click()
  }
  verifyRadioButtonIsChecked() {
    return cy.get('@enabledRdoBtn').prev().should('be.checked')
  }
  verifyOutput() {
    return cy
      .get('@enabledRdoBtn')
      .invoke('text')
      .then((txt) => {
        cy.get('.mt-3').should('contain', txt)
      })
  }
  clickOnDisabledRadioButton(value: string) {
    return cy.get('.custom-radio').filter('.disabled').contains(value).as('disabledRdoBtn').click()
  }
  verifyRadioButtonIsUnchecked() {
    return cy.get('@disabledRdoBtn').prev().should('not.be.checked')
  }
  verifyOutputNotExist() {
    return cy.get('.mt-3').should('not.exist')
  }
}
