import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'
import { webTable } from '../../support/page-objects/elements_po'

let _value: string

Given('I am at the page', () => {
  cy.visit('/webtables')
})
When('I look for {string} from {string} column', (value: string, columnName: string) => {
  webTable.findUserDetails(value, columnName)
  _value = value
})
And('I click the delete button', () => {
  webTable.clickOnDeleteButton()
})
Then('It should not be displayed on the current table', () => {
  webTable.verifyItemIsDeleted(_value)
})
