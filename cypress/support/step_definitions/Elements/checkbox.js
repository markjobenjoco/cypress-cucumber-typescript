import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'
import { ElementsPage } from '../../page-objects/elements_po'

const elements = new ElementsPage()

Given('I am at the elements page', () => {
  elements.visitElementsPage()
})
Then('I should be able to see the Elements in the header', () => {
  elements.getHeaderValue()
})
When('I navigate to and select {string} from the page menu list', (MenuName) => {
  elements.clickTextboxFromMenuList(MenuName)
})
And('I click the expand button', () => {
  cy.get('.rct-option-expand-all').click()
})
Then('I should be able to see all the options list', () => {
  cy.get('.rct-text').its('length').should('eq', 17)
})
And('I click the {string} checkbox from the list', (FieldName) => {
  cy.get('.rct-text').contains(FieldName).as('checkField').click()
})
Then('It should be checked', () => {
  cy.get('@checkField').find('.rct-checkbox > .rct-icon').invoke('attr', 'class').should('contain', 'rct-icon-check')
})
