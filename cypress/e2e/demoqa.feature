Feature: demoqa validation

    Scenario: User should be able to launch demoqa site
        Given I launch the demoqa Site
        When I check the title of the demoqa page
        Then I should see the title as "DEMOQA"

    Scenario: User should be able to navigate to components page
        Given I launch the demoqa Site
        When I click on elements link
        Then I should see the Tools QA page

    @connectivity
    Scenario: User should be able to user text box and submit a message
        Given I launch the Text box elements page
        And I should be able to fill the form
        Then I Submit the form
        And I should see the entered message below

        

