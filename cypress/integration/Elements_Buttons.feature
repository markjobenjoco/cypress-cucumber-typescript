Feature: Elements buttons page

    Automate different ways to interact with the button/s

    Background:
        Given I am at the elements buttons page

    Scenario: Double Click Me button
        When I click the button Double Click Me
        Then Double Click message should be log in the output -- "You have done a double click"

    Scenario: Right Click Me button
        When I click the button Right Click Me
        Then Right Click message should be log in the output -- "You have done a right click"

    Scenario: Click Me button
        When I click the button Click Me
        Then Dynamic Click message should be log in the output -- "You have done a dynamic click"