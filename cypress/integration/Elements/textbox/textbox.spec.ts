import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'
import { elementsPage, txtBox } from '../../../support/page-objects/elements_po'

let name: string, email: string, address1: string, address2: string

Given('I am at the elements page', () => {
  elementsPage.visitElementsPage()
})
Then('I should be able to see the Elements in the header', () => {
  cy.getHeaderValue().should('contain', 'Elements')
})
When('I navigate to and select {string} from the page menu list', (value: string) => {
  elementsPage.clickTextboxFromMenuList(value)
})
And('I enter {string} value on the Full Name text field', (fName: string) => {
  name = fName
  txtBox.enterFullName(name)
})
And('I enter {string} value on the Email text field', (eMail: string) => {
  email = eMail
  txtBox.enterEmail(eMail)
})
And('I enter {string} value on the Current Address text field', (currentAddress: string) => {
  address1 = currentAddress
  txtBox.enterCurrentAddress(address1)
})
And('I enter {string} value on the Permanent Address text field', (permanentAddress: string) => {
  address2 = permanentAddress
  txtBox.enterPermanentAddress(address2)
})
And('I click the Submit button', () => {
  txtBox.clickSubmitButton()
})
Then('I should be able to see my entered value below', () => {
  txtBox.verifyOutput({ name, email, address1, address2 })
})
