Feature: Forms - Practice Forms

    Automate Forms - Practice Forms
    As a user, I want to be able to add the information of the Student in Student Registration Form

    Background: Navigate to Forms - Practice Forms
        Given I am at the Forms Practice Forms page
        Then The header name should be "Practice Form"

    Scenario Outline: Fill up the student registration form using static value
        When I enter the students "<First Name>" on the First Name field
        And I enter the students "<Last Name>" on the Last Name field
        And I enter the students "<Email>" on the Email field
        And I select the students gender "<Gender>" from the Gender selection
        And I enter the students "<Mobile Number>" on the Mobile Number field
        And I enter the students "<Date of Birth>" on the Date of Birth field
        And I search for "<Subject>" and select "<Subject Name>" from the result bar
        And I select the students hobby "<Hobbies>"
        And I upload the students Photo "<Photo>"
        And I enter the students "<Current Address>" on the Current Address field
        And I choose the students state "<State>" and city "<City>"
        And I click the submit button
        Then A modal should be displayed
        And It should have a title of "Thanks for submitting the form"
        And Verify the Student Name
        And Verify the Student Email
        And Verify the Student Gender
        And Verify the Student Mobile number
        And Verify the Student Date of Birth
        And Verify the Student Subjects
        And Verify the Student Hobbies
        And Verify the Student Picture
        And Verify the Student Address
        And Verify the Student State and City
        When I click the close button
        Then Modal should be closed


        Examples:
            | First Name | Last Name | Email              | Gender | Mobile Number | Date of Birth | Subject | Subject Name | Hobbies | Photo       | Current Address         | State | City  |
            | Mark       | Joco      | testuser@gmail.com | Male   | 0912345678    | 12/15/1995    | Math    | Maths        | Music   | img-001.png | Bell Place, Philippines | NCR   | Delhi |

    Scenario: Fill up the student registration form using radomly generated value
        When I enter a random first name
        And I enter a random last name
        And I enter a random email
        And I select the students gender "Female" from the Gender selection
        And I enter a random phone number
        And I enter a random date of birth
        And I search for "Computer" and select "Computer Science" from the result bar
        And I select the students hobby "Sports"
        And I upload the students Photo "img-002.png"
        And I enter a random address
        And I choose the students state "Rajasthan" and city "Jaiselmer"
        And I click the submit button
        Then A modal should be displayed
        And It should have a title of "Thanks for submitting the form"
        And Verify the Student Name
        And Verify the Student Email
        And Verify the Student Gender
        And Verify the Student Mobile number
        And Verify the Student Date of Birth
        And Verify the Student Subjects
        And Verify the Student Hobbies
        And Verify the Student Picture
        And Verify the Student Address
        And Verify the Student State and City
        When I click the close button
        Then Modal should be closed

