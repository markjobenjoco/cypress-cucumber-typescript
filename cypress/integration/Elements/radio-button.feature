Feature: Radio button challenge

    Background:
        Given I am at the elements page
        Then I should be able to see the Elements in the header
        When I navigate to and select "Radio Button" from the page menu list
        Then I should be able to see the Radio Button in the header

    Scenario Outline: As a user, I should be able to click enabled radio button
        When I click "<RadioButton>" from the list of options that is not disabled
        Then The selected radio button should be checked
        And I should also see the radio button value in the output below

        Examples:
            | RadioButton |
            | Yes         |
            | Impressive  |

    Scenario: As a user, I should not be able to click disabled radio button
        When I click the "No" from the options
        Then It should not be checked
        And It should not be displayed in the output field