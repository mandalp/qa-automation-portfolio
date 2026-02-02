Feature: CEP Search

  As a system user
  I want to search for an address using a CEP
  So that address information is automatically filled


  Scenario: Search for a valid CEP
    Given I am authenticated in the system
    And I access the CEP search page
    When I enter a valid CEP
    And I submit the form
    Then the address fields should be automatically filled


  Scenario: Search for an invalid CEP
    Given I am authenticated in the system
    And I access the CEP search page
    When I enter an invalid CEP
    And I submit the form
    Then I should see a validation message indicating the CEP is invalid
    And the address fields should not be filled


  Scenario: Search for a non-existent CEP
    Given I am authenticated in the system
    And I access the CEP search page
    When I enter a non-existent CEP
    And I submit the form
    Then I should see a message indicating the CEP was not found
    And the address fields should not be filled
