import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'
import { elementsPage } from '../../support/page-objects/elements_po'

import { User } from '..//..//support/interfaces/elements'

const field = (x: string) => cy.get(`input#${x}`)
const quiet = { log: false }
let _firstName: string, _lastName: string, _email: string, _age: string, _salary: string, _department: string

Given('I am at the elements page', () => {
  elementsPage.visitElementsPage()
})
Then('I should be able to see the Elements in the header', () => {
  elementsPage.getHeaderValue()
})
When('I navigate to and select {string} from the page menu list', (pageName: string) => {
  elementsPage.clickTextboxFromMenuList(pageName)
})
Then('I should be able to see the {string} in the header', (header: string) => {
  cy.get('.main-header').invoke('text').should('contain', header)
})
When('I click the Add button', () => {
  cy.get('#addNewRecordButton').click()
})
Then('I should see Registration Form modal', () => {
  cy.get('.modal-content').should('be.visible').as('registrationForm')
})
When('I enter {string} on the Firstname text field', (fName: string) => {
  _firstName = fName
  cy.get('@registrationForm').within(() => {
    field('firstName').type(fName)
  })
})
And('I enter {string} on the Lastname text field', (lName: string) => {
  _lastName = lName
  cy.get('@registrationForm').within(() => {
    field('lastName').type(lName)
  })
})
And('I enter {string} on the Email text field', (email: string) => {
  _email = email
  cy.get('@registrationForm').within(() => {
    field('userEmail').type(email)
  })
})
And('I enter {string} on the Age text field', (age: string) => {
  _age = parseInt(age).toString()
  cy.get('@registrationForm').within(() => {
    field('age').type(age)
  })
})
And('I enter {string} on the Salary text field', (salary: string) => {
  _salary = salary
  cy.get('@registrationForm').within(() => {
    field('salary').type(salary)
  })
})
And('I enter {string} on the Department text field', (department: string) => {
  _department = department
  cy.get('@registrationForm').within(() => {
    field('department').type(department)
  })
})
And('I click the Submit button', () => {
  cy.get('@registrationForm').within(() => {
    cy.get('#submit').click()
  })
})
Then('It should display on the web table', () => {
  findInPage('First Name', _firstName)
  findInPage('Last Name', _lastName)
  findInPage('Email', _email)
  findInPage('Age', _age)
  findInPage('Salary', _salary)
  findInPage('Department', _department)
})

function findInPage(fieldName: string, valueToFind: string) {
  const headers: string[] = []
  cy.get('.rt-resizable-header-content', quiet).each(($el: JQuery<HTMLElement>) => {
    headers.push($el.text())
  })
  const findInCurrentTable = (index: number) => {
    let found = false

    cy.get('.rt-tr-group').its('length').as('tableRows')
    cy.wrap(headers).then((header) => {
      cy.get(`.rt-tr-group:nth-of-type(${index})`).find('.rt-td').eq(header.indexOf(fieldName)).invoke('text').as('textValue')
    })
    cy.get('@textValue')
      .then((value) => {
        if (valueToFind.includes(value.toString())) {
          found = true
          expect(value).eq(valueToFind)
        }
      })
      .then(() => {
        cy.get('@tableRows').then((rowCount) => {
          if (index < parseInt(rowCount.toString())) if (!found) findInCurrentTable(++index)
        })
      })
  }
  findInCurrentTable(1)
}
