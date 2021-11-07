Feature: Broken links and image page

    Automate feature

    Background: As a user, I am at this page
        Given I am at the element Broken Links - Images page challenge
        Then The header name should be "Broken Links - Images"

    Scenario: Verify valid and broken images
        Then Under Valid Image ToolsQa logo should be displayed
        Then Under Broken Image no proper image should be displayed

    Scenario: Verify valid links
        When I click the Valid link
        Then I should be redirected to the Mainpage
    Scenario: Verify broken links
        When I click the Broken link
        Then I should be redirected to the Brokenpage