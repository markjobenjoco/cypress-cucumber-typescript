import { Given, Then, And, When } from 'cypress-cucumber-preprocessor/steps'
import { forms } from '../../../support/page-objects/forms_po'

Given('I am at the Forms Practice Forms page', () => {
  forms.openFormsPage()
})
Then('The header name should be {string}', (header: string) => {
  cy.getHeaderValue().should('contain', header)
})
Then('A modal should be displayed', () => {
  forms.modal().should('be.visible')
})
And('It should have a title of {string}', (expected: string) => {
  forms.modalTitle().should('have.text', expected)
})
And('I click the submit button', () => {
  forms.submit()
})
When('I click the close button', () => {
  forms.closeButton()
})
Then('Modal should be closed', () => {
  forms.modal().should('not.exist')
})
