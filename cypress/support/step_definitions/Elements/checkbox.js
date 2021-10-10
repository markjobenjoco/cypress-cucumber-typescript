import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'
import { ElementsPage, Checkbox } from '../../page-objects/elements_po'

const elements = new ElementsPage()
const chk = new Checkbox()

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
  chk.clickOnExpandButton()
})
Then('I should be able to see all the options list', () => {
  chk.verifyListLength(17)
})
And('I click the {string} checkbox from the list', (FieldName) => {
  chk.clickRdoOption(FieldName.toString())
})
Then('It should be checked', () => {
  chk.isChecked()
})
