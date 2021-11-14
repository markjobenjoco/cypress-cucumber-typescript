import { Given, Then, When, And } from 'cypress-cucumber-preprocessor/steps'
import { browserWindows } from '../../../support/page-objects/alerts-frames-windows_po'

Given('I the user is on the browser windows page', () => {
  browserWindows.openPage()
})
Then('Header should be {string}', (header: string) => {
  cy.getHeaderValue().should('eq', header)
})
When('I click the New Tab button', () => {
  browserWindows.clickOnNewButton().should('be.called')
})
Then('Verify the url to have the word {string}', (text: string) => {
  browserWindows.verifyUrl(text)
})
And('Page body to have the word {string}', (text: string) => {
  browserWindows.verifyContent(text)
})
When('I go back to original page', () => {
  cy.go('back')
  cy.url().should('contain', '/browser-windows')
})
And('I click New Window button', () => {
  browserWindows.clickOnNewWindow().should('be.called')
})
When('I click the New Window Message button', () => {
  // Not working
  /*  cy.window().then((win) => {
    cy.stub(win, 'open').as('newWindowMessage')
  })
  cy.get('#messageWindowButton').click()
  cy.get('@newWindowMessage').should('be.called') */
})
Then('Page body to have this message {string}', (message: string) => {
  //   cy.get('body').should('contain', message)
})
// When('I', () => {
//   cy.get('#tabButton').then(() => {
//     cy.visit('/sample')
//   })
// })
