Feature: Elements - Dynamic Properties

    Automate elements page dynamic properties
    As a user, I want to be able to check if a certain button is;
    enabled after a certain amount of time,
    will change the text color after a certain amount of time,
    and will be visible after a certain amount of time

    Background: Navigate to Elements - Dynamic Properties
        Given I am at the Elements - Dynamic Properties page
        Then The header name should be "Dynamic Properties"

    Scenario: Verify "Will enable 5 seconds" button will be enabled after 5 seconds
        When After waiting for 5 seconds
        Then "Will enable 5 seconds" should be enabled
    Scenario: Verify "Color Change" button will change its text color after 5 seconds
        When After waiting for 5 seconds
        Then "Color Change" should change its color to red
    Scenario: Verify "Visible After 5 Seconds" button will be displayed after 5 seconds
        When After waiting for 5 seconds
        Then "Visible After 5 Seconds" should be displayed