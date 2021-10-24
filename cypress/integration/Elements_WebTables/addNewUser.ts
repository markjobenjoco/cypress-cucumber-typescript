import { When, And, Then, Before } from 'cypress-cucumber-preprocessor/steps'
import { webTable } from '../../support/page-objects/elements_po'

let _firstName: string, _lastName: string, _email: string, _age: string, _salary: string, _department: string

Before(() => {
  cy.reload()
})

When('I click the Add button', () => {
  webTable.clickAddButton()
})

When('I enter {string} on the Firstname text field', (fName: string) => {
  webTable
    .enterFirstName(fName)
    .invoke('val')
    .then(($value) => (_firstName = $value!.toString()))
})
And('I enter {string} on the Lastname text field', (lName: string) => {
  webTable
    .enterLastName(lName)
    .invoke('val')
    .then(($value) => (_lastName = $value!.toString()))
})
And('I enter {string} on the Email text field', (email: string) => {
  webTable
    .enterEmail(email)
    .invoke('val')
    .then(($value) => (_email = $value!.toString()))
})
And('I enter {string} on the Age text field', (age: string) => {
  webTable
    .enterAge(age)
    .invoke('val')
    .then(($value) => (_age = $value!.toString()))
})
And('I enter {string} on the Salary text field', (salary: string) => {
  webTable
    .enterSalary(salary)
    .invoke('val')
    .then(($value) => (_salary = $value!.toString()))
})
And('I enter {string} on the Department text field', (department: string) => {
  webTable
    .enterDepartment(department)
    .invoke('val')
    .then(($value) => (_department = $value!.toString()))
})

Then('It should display on the web table', () => {
  webTable.findInTable('First Name', _firstName)
  // findInPage('Last Name', _lastName)
  // findInPage('Email', _email)
  // findInPage('Age', _age)
  // findInPage('Salary', _salary)
  webTable.findInTable('Department', 'Insurance')
})
