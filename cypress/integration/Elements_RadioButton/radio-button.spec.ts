import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { elementsPage, rdoButtons } from '../../support/page-objects/elements_po'

// As a user, I should be able to click enabled radio button
Given('I am at the elements page', () => {
  elementsPage.visitElementsPage()
})
Then('I should be able to see the Elements in the header', () => {
  elementsPage.getHeaderValue()
})
When('I navigate to and select {string} from the page menu list', (value: string) => {
  elementsPage.clickTextboxFromMenuList(value)
})
Then('I should be able to see the Radio Button in the header', () => {
  rdoButtons.verifyHeaderValue()
})
When('I click {string} from the list of options that is not disabled', (value: string) => {
  rdoButtons.clickOnEnabledRadioButton(value)
})
Then('The selected radio button should be checked', () => {
  rdoButtons.verifyRadioButtonIsChecked()
})
And('I should also see the radio button value in the output below', () => {
  rdoButtons.verifyOutput()
})

// As a user, I should not be able to click disabled radio button
When('I click the {string} from the options', (value: string) => {
  rdoButtons.clickOnDisabledRadioButton(value)
})
Then('It should not be checked', () => {
  rdoButtons.verifyRadioButtonIsUnchecked()
})
And('It should not be displayed in the output field', () => {
  rdoButtons.verifyOutputNotExist()
})
