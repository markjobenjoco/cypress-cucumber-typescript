Feature: Alerts, Frame & Windows - Nested Frames

        Scenario: Verify that parent and child forms exists in the page
                Given I am at the nested-frames page
                Then It should have a header value of "Nested Frames"
                And Parent frame should exists
                And Parent frame should contain "Parent" text
                And Child frame should exists
                And Child frame should contain "Child" text