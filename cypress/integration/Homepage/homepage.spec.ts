import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import { homepage } from '../../support/page-objects/homepage_po'

Given('I visit the ToolsQA demo page', () => {
  homepage.openMainpage()
})
Then('I see {string} in the title', (pageTitle: string) => {
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
When('I click the {string} category', (challenge: string) => {
  homepage.openChallengePage(challenge)
})
Then('I want to see the {string} in the header', (headerName: string) => {
  homepage.getHeaderName(headerName)
})
