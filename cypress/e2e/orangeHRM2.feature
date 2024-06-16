Feature: Validate Orange HRM demo site

    Background: Test precondition
        Given I visit the orange HRM demo site
        And I will be landed on the orangeJRM's homepage

    @orangeHRM
    Scenario: Login to the orange HRM demo site with valid credentials
        Given I login with the user name and password
        When I click on PIM from LHN
        Then I can see the employees list
        And I validate the employee from the row number 3
