Feature: Open ToolsQA.com homepage

    Scenario Outline: As a user, I want to open the homepage of ToolsQA.com
        Given I visit the ToolsQA demo page
        Then I see "<pageTitle>" in the title
        Then I see the header in the page
        Then I see the banner in the mainpage

        Examples:
            | pageTitle |
            | ToolsQA   |

    Scenario Outline: As a user, I want to be able to open any of the challenge page
        Given I am at the mainpage of ToolsQA.com
        When I click the "<challenge>" category
        Then I want to see the "<headerName>" in the header

        Examples:
            | challenge               | headerName              |
            | Elements                | Elements                |
            | Forms                   | Forms                   |
            | Alerts, Frame & Windows | Alerts, Frame & Windows |
            | Widgets                 | Widgets                 |
            | Interactions            | Interactions            |
            | Book Store Application  | Book Store              |