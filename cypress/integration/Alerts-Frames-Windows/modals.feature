Feature: Alerts, Frame & Windows - Modals
    Background: Initial step for Modals
        Given I the user is on the Alerts, Frame & Windows - Modals page windows page
        Then Header should be "Modal Dialogs"

    Scenario: As a user, I want to be able to click the small modal buttons and then it should have a modal.
        When I click the Small Modal button
        Then A small modal should show
        And With a header name of "Small Modal"
        And That contain this text "This is a small modal. It has very less content"
        When I click the small modal Close button
        Then The small modal should be closed
    Scenario: As a user, I want to be able to click the large modal buttons and then it should have a modal.
        When I click the Large Modal button
        Then A large modal should show
        And With a header name of "Large Modal"
        And That contain this text "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        When I click the large modal Close button
        Then The large modal should be closed