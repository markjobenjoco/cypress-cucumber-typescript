import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'
import { ElementsPage, Textbox } from '../../page-objects/elements_po'

const elements = new ElementsPage()
const textBox = new Textbox()
let name, email, address1, address2

Given('I am at the elements page', () => {
  elements.visitElementsPage()
})
Then('I should be able to see the Elements in the header', () => {
  elements.getHeaderValue()
})
When('I navigate to and select {string} from the page menu list', (MenuName) => {
  elements.clickTextboxFromMenuList(MenuName)
})
And('I enter {string} value on the Full Name text field', (FullName) => {
  name = FullName.toString()
  textBox.enterFullName(name)
})
And('I enter {string} value on the Email text field', (Email) => {
  email = Email.toString()
  textBox.enterEmail(email)
})
And('I enter {string} value on the Current Address text field', (CurrentAddress) => {
  address1 = CurrentAddress.toString()
  textBox.enterCurrentAddress(address1)
})
And('I enter {string} value on the Permanent Address text field', (PermanentAddress) => {
  address2 = PermanentAddress.toString()
  textBox.enterPermanentAddress(address2)
})
And('I click the Submit button', () => {
  textBox.clickSubmitButton()
})
Then('I should be able to see my entered value below', () => {
  textBox.verifyOutput({ name, email, address1, address2 })
})
