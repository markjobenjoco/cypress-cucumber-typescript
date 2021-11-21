Feature: Alerts, Frame & Windows - Alerts page
    Background: Initial step for Browser Windows
        Given I the user is on the Alerts, Frame & Windows - Alerts page windows page
        Then Header should be "Alerts"

    Scenario: The user want to verify that a message will show after clicking the first Click Me button
        When The user clicks the alert button
        Then An alert should be displayed
        And This message should be on the alert "You clicked a button"

    Scenario: The user want to verify that an alert will show after 5 secs
        When The user clicks the timed alert button
        Then An alert should be displayed after 5 seconds
        And This message should be on the timed alert "This alert appeared after 5 seconds"

    Scenario Outline: The user want to verify that the confirm box options can be both used
        When The user clicks the confirm button and selects "<options>"
        Then A confirm box should be displayed with a message "Do you confirm action?"
        And This should be shown in the output You selected "<result>"

        Examples:
            | options | result |
            | Ok      | Ok     |
            | Cancel  | Cancel |

    Scenario: The user want to verify the prompt box
        When The user clicks the prompt box button and then Enters "Mark Joco"
        Then Verify that the name "Mark Joco" will be displayed