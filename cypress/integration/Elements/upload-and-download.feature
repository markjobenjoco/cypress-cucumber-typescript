Feature: Elements Upload and Download

    Test for upload and download challenge

    Background: Initial step for upload and download
        Given I the user is on the upload and download page
        Then Header should be "Upload and Download"

    Scenario: Verify download button works
        When I locate the Download button
        And I click the button
        Then A file should be downloaded
        And It should exists
    Scenario: Verify upload button works
        When I locate the Upload button
        And I click the button and uploaded this "img-001.png"
        Then The filename should be displayed on the output "img-001.png"