import { Given, Then } from 'cypress-cucumber-preprocessor/steps'
import { links } from '..//..//support/page-objects/elements_po'

Given('I am at the element links page challenge', () => links.openPage())
Then('I should be able to the Links in the header', () => links.getHeaderValue().should('contain', 'Links'))
Then('Current URL should be {string}', (url: string) => {
  links.getUrl().should('eq', url)
})
