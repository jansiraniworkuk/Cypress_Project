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
        And I will be able to see all the elements on the home page after the login

    @conduit @P1 @elements
    Scenario: Create few posts in conduit application
        Given I login to the conduit web page
        When I create few posts in conduit web page with the below details:
            | title       | description             | body                                | tags      |
            | First Post  | This is the first post  | This is the body of the first post  | tag1,tag2 |
            | Second Post | This is the second post | This is the body of the second post | tag3,tag4 |
            | Third Post  | This is the third post  | This is the body of the third post  | tag5,tag6 |
        Then I will be able to see them under Your Feed with the below details:
            | title       | author | tags      | likes |
            | First Post  | Jansi  | tag1,tag2 | 0     |
            | Second Post | Jansi  | tag3,tag4 | 35    |
            | Third Post  | Jansi  | tag5,tag6 | 35    |


#End of scenario