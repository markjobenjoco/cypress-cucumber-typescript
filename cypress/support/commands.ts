import 'cypress-file-upload'
import './interfaces/custom-commands'

const getHeaderValue = () => cy.get('.main-header').invoke('text')

Cypress.Commands.add('getHeaderValue', getHeaderValue)
