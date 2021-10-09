Feature: Elements page challenges

    Scenario Outline: As a user, I want to be able to try the Text Box challenge
        Given I am at the elements page
        Then I should be able to see the Elements in the header
        When I navigate to and select "<ElementsMenu>" from the page menu list
        And I enter "<FullName>" value on the Full Name text field
        And I enter "<Email>" value on the Email text field
        And I enter "<CurrentAddress>" value on the Current Address text field
        And I enter "<PermanentAddress>" value on the Permanent Address text field
        And I click the Submit button
        Then I should be able to see my entered value below

        Examples:
            | ElementsMenu | FullName  | Email          | CurrentAddress | PermanentAddress           |
            | Text Box     | Test Name | test@gmail.com | Makati City    | Bongabong Oriental Mindoro |