Feature: Alerts, Frames & Windows - Browser Windows

    Background: Initial step for Browser Windows
        Given I the user is on the browser windows page
        Then Header should be "Browser Windows"
    Scenario: Click New Tab button
        When I click the New Tab button
        Then Verify the url to have the word "sample"
        And Page body to have the word "sample"

    Scenario: Click New Window button
        When I click New Window button
        Then Verify the url to have the word "sample"
        And Page body to have the word "sample"

    Scenario: Click New Window Message button
        When I click the New Window Message button
        Then Page body to have this message "Please share this website with your friends and in your organization."

    Scenario: Click and test all buttons in single page
        When I click the New Tab button
        Then Verify the url to have the word "sample"
        And Page body to have the word "sample"
        When I go back to original page
        And I click New Window button
        Then Verify the url to have the word "sample"
        And Page body to have the word "sample"
        When I go back to original page
        When I click the New Window Message button
        Then Page body to have this message "Please share this website with your friends and in your organization."
# Scenario: Test
#     When I