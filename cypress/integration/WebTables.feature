Feature: Automate Web Tables

    Creating new user.
    Updating existing user.
    Removing existing user.
    Finding user from the tables.

    Background:
        Given I am at the elements page
        Then I should be able to see the Elements in the header
        When I navigate to and select "Web Tables" from the page menu list
        Then I should be able to see the "Web Tables" in the header

    Scenario Outline: Add new user.
        When I click the Add button
        Then I should see Registration Form modal
        When I enter "<First Name>" on the Firstname text field
        And I enter "<Last Name>" on the Lastname text field
        And I enter "<Email>" on the Email text field
        And I enter "<Age>" on the Age text field
        And I enter "<Salary>" on the Salary text field
        And I enter "<Department>" on the Department text field
        And I click the Submit button
        Then It should display on the web table
        Examples:
            | First Name | Last Name | Email          | Age | Salary | Department |
            | Test Name  | De Guzman | test@gmail.com | 23  | 67000  | QA         |
# | Test Name  | De Guzman | test@gmail.com | 23.5 | 67000  | QA         |