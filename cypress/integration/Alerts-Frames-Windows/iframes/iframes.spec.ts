import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import { iframes } from '../../../support/page-objects/alerts-frames-windows_po'

Given('I am at the Alerts, Frame & Windows Iframes page', () => iframes.openIframePage())
Then('The header name should be {string}', (headerValue: string) => cy.getHeaderValue().should('contain', headerValue))

When('I navigate to {string} iframe', (iFrame: string) => iframes.getIFrame(iFrame).as('currentIframe'))
Then('I should found {string}', (text: string) => cy.get('@currentIframe').should('have.text', text))
When('I change the text value to {string}', (modifiedText) => cy.get('@currentIframe').invoke('text', modifiedText))
Then('I should verify that the iframe text contains {string}', (expected: string) => cy.get('@currentIframe').should('contain', expected))
