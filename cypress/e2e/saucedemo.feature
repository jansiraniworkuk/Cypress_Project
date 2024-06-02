Feature: demoqa validation

Scenario: User should be able to launch demoqa site
    Given I launch the demoqa Site 
    When I check the title of the demoqa page
    Then I should see the title as "DEMOQA"


