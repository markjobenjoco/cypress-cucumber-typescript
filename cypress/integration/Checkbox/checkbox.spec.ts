import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'
import { elementsPage, chkBox } from '../../support/page-objects/elements_po'

Given('I am at the elements page', () => {
  elementsPage.visitElementsPage()
})
Then('I should be able to see the Elements in the header', () => {
  elementsPage.getHeaderValue()
})
When('I navigate to and select {string} from the page menu list', (value: string) => {
  elementsPage.clickTextboxFromMenuList(value)
})
And('I click the expand button', () => {
  chkBox.clickOnExpandButton()
})
Then('I should be able to see all the options list', () => {
  chkBox.verifyListLength(17)
})
And('I click the {string} checkbox from the list', (value: string) => {
  chkBox.clickRdoOption(value.toString())
})
Then('It should be checked', () => {
  chkBox.isChecked()
})
