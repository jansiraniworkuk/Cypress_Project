Feature: To validate the conduit application

    @conduit @elements
    Scenario: Launch the Conduit application and check the elements on the sign in page
        Given I visit the conduit web page
        When I navigate to sign in page
        Then I will be able to see the signin page
        And I will be able to see all the elements of the signin page

    @conduit @elements
    Scenario:  Launch the Conduit application and check the elements on the home page
        Given I visit the conduit web page
        When I am on the home page
        Then I will be able to see all the elements of the home page
        And I can scroll down the page

    @conduit @elements
    Scenario: Launch the Conduit application and check the elements on the signup page
        Given I visit the conduit web page
        When I navigate to signup page
        Then I will be able to see all the elements of the signup page

    @conduit @P1
    Scenario: Login to the Conduit application
        Given I visit the conduit web page
        When I navigate to sign in page
        Then I will be able to login to the conduit application


#End of scenario