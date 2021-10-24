import { When, And, Then } from 'cypress-cucumber-preprocessor/steps'
import { webTable } from '../../support/page-objects/elements_po'

let _email: string, _value: string

When('I look for the Email column', () => {
  webTable.getTableRowLen()
})
And('that has a value of {string}', (email: string) => {
  _email = email
  const fieldName: string = 'Email'

  webTable.findUserDetails(email, fieldName)
})
And('I click the edit button', () => {
  webTable.clickEditButton()
})

When('I enter {string} on the {string} text field', (value, field) => {
  _value = value
  webTable.enterNewValue(value, field)
})
Then('I should see the updated value in the web table', () => {
  webTable.verifyNewValue(_value)
})
