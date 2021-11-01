import { Then, When } from 'cypress-cucumber-preprocessor/steps'
import { links } from '..//..//support/page-objects/elements_po'

When('I click {string}', (link: string) => {
  interceptRequest(link).as('req')
  links.getAPILink(link).click()
})
Then('Should display the request output below', () => {
  cy.wait('@req')
    .then((xhr) => {
      const res = { statCode: xhr.response?.statusCode, message: xhr.response?.statusMessage }
      return res
    })
    .then((res) => {
      cy.wrap(res).then((value) => {
        links.returnOutput().should('contain', value.statCode).and('contain', value.message)
      })
    })
})

const interceptRequest = (link: string) => {
  return links.getAPILink(link).then(($link) => {
    cy.wrap($link)
      .invoke('attr', 'id')
      .then((val) => {
        return cy.intercept(`/${val}`)
      })
  })
}
