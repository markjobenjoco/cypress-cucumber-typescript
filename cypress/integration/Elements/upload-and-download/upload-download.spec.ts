import { When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { ud } from '../../../support/page-objects/elements_po'

// This is for download
When('I locate the Download button', () => {
  ud.downloadButton().should('exist')
})
And('I click the button', () => {
  ud.downloadButton().click()
})
Then('A file should be downloaded', () => {
  ud.donwloaded('sampleFile.jpeg').as('jpeg')
})
And('It should exists', () => {
  cy.get('@jpeg').should('exist')
})

// This is for upload
When('I locate the Upload button', () => {
  ud.uploadButton().as('uploadBtn')
})
And('I click the button and uploaded this {string}', (filename: string) => {
  cy.get('@uploadBtn').attachFile(`Elements/${filename}`)
})
Then('The filename should be displayed on the output {string}', (filename: string) => {
  ud.verifyUploadOutput().should('contain.text', filename)
})
