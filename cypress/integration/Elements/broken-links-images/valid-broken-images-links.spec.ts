import { Then, When } from 'cypress-cucumber-preprocessor/steps'
import { brokenLinksImages } from '../../../support/page-objects/elements_po'

Then('Under Valid Image ToolsQa logo should be displayed', () => brokenLinksImages.getValidImage().invoke('attr', 'src').should('eq', '/images/Toolsqa.jpg'))
Then('Under Broken Image no proper image should be displayed', () => brokenLinksImages.getBrokenImage().invoke('attr', 'src').should('eq', '/images/Toolsqa_1.jpg'))
When('I click the Valid link', () => brokenLinksImages.clickOnValidLink().click())
Then('I should be redirected to the Mainpage', () => cy.url().should('eq', 'https://demoqa.com/'))
When('I click the Broken link', () => brokenLinksImages.clickOnBrokenLink().click())
Then('I should be redirected to the Brokenpage', () => cy.url().should('eq', 'http://the-internet.herokuapp.com/status_codes/500'))
