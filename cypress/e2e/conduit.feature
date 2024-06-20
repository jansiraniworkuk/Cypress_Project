Feature: To validate the conduit application

    @conduit
    Scenario: Launch the Conduit application and quickly check the connectivity
        Given I visit the conduit web page
        When I navigate to sign in page
        Then I will be able to see the signin page

    