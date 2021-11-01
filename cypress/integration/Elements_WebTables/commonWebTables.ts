import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'
import { elementsPage, webTable } from '../../support/page-objects/elements_po'

Given('I am at the elements page', () => {
  elementsPage.visitElementsPage()
})
Then('I should be able to see the Elements in the header', () => {
  cy.getHeaderValue().should('contain', 'Elements')
})
When('I navigate to and select {string} from the page menu list', (pageName: string) => {
  elementsPage.clickTextboxFromMenuList(pageName)
})
Then('I should be able to see the {string} in the header', (header: string) => {
  webTable.verifyHeaderValue(header)
})
Then('I should see Registration Form modal', () => {
  webTable.verifyRegistrationForm()
})
And('I click the Submit button', () => {
  webTable.clickOnSubmit()
})
