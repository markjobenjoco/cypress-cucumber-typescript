import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import { Homepage } from '../../page-objects/homepage_po'

const homepage = new Homepage()

Given('I visit the ToolsQA demo page', () => {
  homepage.openMainpage()
})
Then('I see {string} in the title', (pageTitle) => {
  homepage.getTitle(pageTitle)
})
Then('I see the header in the page', () => {
  homepage.getHeaderHref()
})
Then('I see the banner in the mainpage', () => {
  homepage.getBanner()
})

Given('I am at the mainpage of ToolsQA.com', () => {
  homepage.openMainpage()
})
When('I click the {string} category', (challenge) => {
  homepage.openChallengePage(challenge)
})
Then('I want to see the {string} in the header', (headerName) => {
  homepage.getHeaderName(headerName)
})
