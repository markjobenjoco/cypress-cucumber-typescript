import { Then, When } from 'cypress-cucumber-preprocessor/steps'
import { links } from '..//..//support/page-objects/elements_po'

When('I click {string}', (link: string) => {
  links.getAPILink(link).then(($link) => {
    cy.wrap($link)
      .invoke('attr', 'id')
      .then((val) => cy.intercept(`/${val}`).as('req'))
    cy.wrap($link).click()
  })
})
Then('Should display the request output below', () => {
  cy.wait('@req')
    .then((xhr) => {
      const actual = { statCode: xhr.response?.statusCode, message: xhr.response?.statusMessage }
      return actual
    })
    .then((actual) => {
      cy.wrap(actual).then((value) => {
        links.returnOutput().should('contain', value.statCode).and('contain', value.message)
      })
    })
})
