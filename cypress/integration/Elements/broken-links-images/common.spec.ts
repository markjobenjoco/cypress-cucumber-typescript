import { Given, Then } from 'cypress-cucumber-preprocessor/steps'
import { brokenLinksImages } from '../../../support/page-objects/elements_po'

Given('I am at the element Broken Links - Images page challenge', () => brokenLinksImages.openPage())
Then('The header name should be {string}', (headerName: string) => cy.getHeaderValue().should('contain', headerName))
