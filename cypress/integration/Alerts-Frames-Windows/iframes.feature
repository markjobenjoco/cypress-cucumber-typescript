Feature: Elements - IFrames

    Automate Alerts, Frame & Windows Iframes
    As a user, I want to be able to check the current value of iframe 1
    As a user, I want to be able to check the current value of iframe 2
    and modify its value

    Background: Navigate to Elements - Dynamic Properties
        Given I am at the Alerts, Frame & Windows Iframes page
        Then The header name should be "Frames"

    Scenario Outline: Verify the text is inside the iframe and modify its value
        When I navigate to "<IFrame>" iframe
        Then I should found "<IFrameText>"
        When I change the text value to "<UpdatedTextValue>"
        Then I should verify that the iframe text contains "<ExpectedTextValue>"

        Examples:
            | IFrame | IFrameText            | UpdatedTextValue                    | ExpectedTextValue |
            | first  | This is a sample page | Updated text value to first iframe  | first iframe      |
            | second | This is a sample page | Updated text value to second iframe | second iframe     |
# | third  | This is a sample page | Updated text value to second iframe | second iframe     |