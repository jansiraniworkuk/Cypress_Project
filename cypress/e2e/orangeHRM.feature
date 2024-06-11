Feature: Validate Orange HRM demo site

    @connectivity
    Scenario: Validate visit
        Given I visit the orange HRM demo site
        Then I will be landed on the orangeJRM's homepage

    Scenario: Login to the orange HRM demo site with valid credentials
        Given I visit the orange HRM demo site
        When I login with the user name and password
        Then I will be logged in successfully

    Scenario: Login to the orange HRM demo site with invalid credentials
        Given I visit the orange HRM demo site
        When I login with invalid user name and password
        Then I will not be logged in