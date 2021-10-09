Feature: Checkbox challange page

    Scenario Outline: As a user, I want to be able to try the Checkbox challenge
        Given I am at the elements page
        Then I should be able to see the Elements in the header
        When I navigate to and select "<MenuName>" from the page menu list
        And I click the expand button
        Then I should be able to see all the options list
        And I click the "<FieldName>" checkbox from the list
        Then It should be checked

        Examples:
            | MenuName  | FieldName      |
            | Check Box | Home           |
            | Check Box | Desktop        |
            | Check Box | Notes          |
            | Check Box | Commands       |
            | Check Box | Documents      |
            | Check Box | WorkSpace      |
            | Check Box | React          |
            | Check Box | Angular        |
            | Check Box | Veu            |
            | Check Box | Office         |
            | Check Box | Public         |
            | Check Box | Private        |
            | Check Box | Classified     |
            | Check Box | General        |
            | Check Box | Downloads      |
            | Check Box | Word File.doc  |
            | Check Box | Excel File.doc |