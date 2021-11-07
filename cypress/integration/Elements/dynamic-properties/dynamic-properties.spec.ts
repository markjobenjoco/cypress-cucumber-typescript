import { Given, Then, When, Before } from 'cypress-cucumber-preprocessor/steps'
import { dp } from '../../../support/page-objects/elements_po'

Before(() => cy.clock())
Given('I am at the Elements - Dynamic Properties page', () => dp.openDynamicPropertiesPage())
Then('The header name should be {string}', (headerValue: string) => cy.getHeaderValue().should('contain', headerValue))
When('After waiting for 5 seconds', () => cy.tick(5010))
Then('{string} should be enabled', () => dp.getButtonById('enableAfter').should('be.enabled'))
When('After waiting for 5 seconds', () => cy.tick(5010))
Then('{string} should change its color to red', () => dp.getButtonById('colorChange').should('have.css', 'color').and('eq', 'rgb(220, 53, 69)'))
When('After waiting for 5 seconds', () => cy.tick(5010))
Then('{string} should be displayed', () => dp.getButtonById('visibleAfter').should('be.visible'))
