import { Given, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { nestedFrames } from '../../../support/page-objects/alerts-frames-windows_po'

Given('I am at the nested-frames page', () => {
  nestedFrames.openPage()
})
Then('It should have a header value of {string}', (header: string) => {
  cy.getHeaderValue().should('eq', header)
})
And('Parent frame should exists', () => {
  nestedFrames.parentIFrame().should('exist')
})
And('Child frame should exists', () => {
  nestedFrames.childIframe().should('exist')
})
And('Parent frame should contain {string} text', (text: string) => {
  nestedFrames.parentIFrame().should('contain.text', text, { matchCase: false })
})
And('Child frame should contain {string} text', (text: string) => {
  nestedFrames.childIframe().should('contain.text', text, { matchCase: false })
})
