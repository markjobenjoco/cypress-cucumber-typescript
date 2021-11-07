Feature: Elements Links page

    Automate different types of links found in the page

    Background: As a user, I want to start at this steps
        Given I am at the element links page challenge
        Then I should be able to the Links in the header

    Scenario: In this category, Following links will open new tab: Static
        When I click the static link
        Then Current URL should be "https://demoqa.com/"
    Scenario: In this category, Following links will open new tab: Dynamic
        When I click the dynamic link
        Then Current URL should be "https://demoqa.com/"

    Scenario Outline: API Calls using links
        When I click "<Link Name>"
        Then Should display the request output below

        Examples:
            | Link Name    |
            | Created      |
            | No Content   |
            | Moved        |
            | Bad Request  |
            | Unauthorized |
            | Forbidden    |
            | Not Found    |