import { Given, Then, When, And } from 'cypress-cucumber-preprocessor/steps'
import { alert } from '../../../support/page-objects/alerts-frames-windows_po'

let _text: string

Given('I the user is on the Alerts, Frame & Windows - Alerts page windows page', () => {
  alert.openPage()
})
Then('Header should be {string}', (header: string) => {
  cy.getHeaderValue().should('eq', header)
})

When('The user clicks the alert button', () => {
  cy.window().then((win) => {
    cy.stub(win, 'alert').as('alert')
  })
  alert.clickOnAlertBtn()
})
Then('An alert should be displayed', () => {
  cy.get('@alert').should('have.been.called')
})
And('This message should be on the alert {string}', (message: string) => {
  cy.get('@alert').should('have.been.calledWithExactly', message)
})

When('The user clicks the timed alert button', () => {
  cy.window().then((win) => {
    cy.stub(win, 'alert').as('timedAlert')
  })
  cy.clock()
  alert.clickOnTimerAlertBtn()
})
Then('An alert should be displayed after 5 seconds', () => {
  cy.tick(5010)
  cy.get('@timedAlert').should('have.been.called')
  cy.clock().invoke('restore')
})
And('This message should be on the timed alert {string}', (message: string) => {
  cy.get('@timedAlert').should('have.been.calledWithExactly', message)
})

When('The user clicks the confirm button and selects {string}', (option: string) => {
  option = option.toLowerCase()
  cy.on('window:confirm', (text) => {
    _text = text
    if (option.includes('ok')) {
      return true
    } else if (option.includes('cancel')) {
      return false
    } else {
      throw new Error(`Unable to process this: ${option}`)
    }
  })

  alert.clickOnConfirmBtn()
})
Then('A confirm box should be displayed with a message {string}', (message: string) => {
  cy.wrap(_text).should('eq', message)
})
And('This should be shown in the output You selected {string}', (result: string) => {
  alert.verifyResult().should('contain', result)
})

When('The user clicks the prompt box button and then Enters {string}', (name: string) => {
  cy.window().then((win) => {
    cy.stub(win, 'prompt').returns(name)
    cy.stub(win, 'alert').as('alert')
  })
  alert.clickOnPromptBtn()
})

Then('Verify that the name {string} will be displayed', (name: string) => {
  alert.verifyPropmtResult().should('contain', name)
})
