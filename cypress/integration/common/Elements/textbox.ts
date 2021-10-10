import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'
import { ElementsPage, Textbox } from '..//..//..//support/page-objects/elements_po'

const elements = new ElementsPage()
const textBox = new Textbox()
let name: string, email: string, address1: string, address2: string

Given('I am at the elements page', () => {
  elements.visitElementsPage()
})
Then('I should be able to see the Elements in the header', () => {
  elements.getHeaderValue()
})
When('I navigate to and select {string} from the page menu list', (value: string) => {
  elements.clickTextboxFromMenuList(value)
})
And('I enter {string} value on the Full Name text field', (fName: string) => {
  name = fName
  textBox.enterFullName(name)
})
And('I enter {string} value on the Email text field', (eMail: string) => {
  email = eMail
  textBox.enterEmail(eMail)
})
And('I enter {string} value on the Current Address text field', (currentAddress: string) => {
  address1 = currentAddress
  textBox.enterCurrentAddress(address1)
})
And('I enter {string} value on the Permanent Address text field', (permanentAddress: string) => {
  address2 = permanentAddress
  textBox.enterPermanentAddress(address2)
})
And('I click the Submit button', () => {
  textBox.clickSubmitButton()
})
Then('I should be able to see my entered value below', () => {
  textBox.verifyOutput({ name, email, address1, address2 })
})
