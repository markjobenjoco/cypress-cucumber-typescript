import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { md } from '../../../support/page-objects/alerts-frames-windows_po'

Given('I the user is on the Alerts, Frame & Windows - Modals page windows page', () => {
  md.openPage()
})
Then('Header should be {string}', (header: string) => {
  cy.getHeaderValue().should('eq', header)
})

// Scenario: As a user, I want to be able to click the small modal buttons and then it should have a modal.
When('I click the Small Modal button', () => {
  md.clickOnSmallBtn()
})
Then('A small modal should show', () => {
  md.modal().should('exist')
})
And('With a header name of {string}', (header: string) => {
  md.verifyModalHeader(header)
})
And('That contain this text {string}', (text: string) => {
  md.verifyModalBody(text)
})
When('I click the small modal Close button', () => {
  md.clickOnSmallModalCloseBtn()
})
Then('The small modal should be closed', () => {
  md.modal().should('not.exist')
})

// Scenario: As a user, I want to be able to click the large modal buttons and then it should have a modal.
When('I click the Large Modal button', () => {
  md.clickOnLargeBtn()
})
Then('A large modal should show', () => {
  md.modal().should('exist')
})
When('I click the large modal Close button', () => {
  md.clickOnLargeModalCloseBtn()
})
Then('The large modal should be closed', () => {
  md.modal().should('not.exist')
})
