import { Given, Then } from 'cypress-cucumber-preprocessor/steps'
import { ud } from '../../../support/page-objects/elements_po'

Given('I the user is on the upload and download page', () => {
  ud.openUploadAndDownloadPage()
})
Then('Header should be {string}', (header: string) => {
  cy.getHeaderValue().should('eq', header)
})
