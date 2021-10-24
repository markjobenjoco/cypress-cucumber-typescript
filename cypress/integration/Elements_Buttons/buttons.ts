import { When, Then } from 'cypress-cucumber-preprocessor/steps'
import { buttons } from '..//..//support/page-objects/elements_po'

When('I click the button Double Click Me', () => {
  buttons.clickOnDoubleClickBtn()
})
Then('Double Click message should be log in the output -- {string}', (message: string) => {
  buttons.verifyDoubleClickBtnOuput(message)
})

When('I click the button Right Click Me', () => {
  buttons.clickOnRightClickBtn()
})
Then('Right Click message should be log in the output -- {string}', (message: string) => {
  buttons.verifyRightClickBtnOutput(message)
})

When('I click the button Click Me', () => {
  buttons.clickOnDynamicBtn()
})
Then('Dynamic Click message should be log in the output -- {string}', (message: string) => {
  buttons.verifyDynamicBtnOutput(message)
})
