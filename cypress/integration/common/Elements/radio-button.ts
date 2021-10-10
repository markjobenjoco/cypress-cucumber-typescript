import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { ElementsPage, RadioButtons } from '..//..//..//support/page-objects/elements_po'

const el = new ElementsPage()
const rdo = new RadioButtons()

// As a user, I should be able to click enabled radio button
Given('I am at the elements page', () => {
  el.visitElementsPage()
})
Then('I should be able to see the Elements in the header', () => {
  el.getHeaderValue()
})
When('I navigate to and select {string} from the page menu list', (value: string) => {
  el.clickTextboxFromMenuList(value)
})
Then('I should be able to see the Radio Button in the header', () => {
  rdo.verifyHeaderValue()
})
When('I click {string} from the list of options that is not disabled', (value: string) => {
  rdo.clickOnEnabledRadioButton(value)
})
Then('The selected radio button should be checked', () => {
  rdo.verifyRadioButtonIsChecked()
})
And('I should also see the radio button value in the output below', () => {
  rdo.verifyOutput()
})

// As a user, I should not be able to click disabled radio button
When('I click the {string} from the options', (value: string) => {
  rdo.clickOnDisabledRadioButton(value)
})
Then('It should not be checked', () => {
  rdo.verifyRadioButtonIsUnchecked()
})
And('It should not be displayed in the output field', () => {
  rdo.verifyOutputNotExist()
})
