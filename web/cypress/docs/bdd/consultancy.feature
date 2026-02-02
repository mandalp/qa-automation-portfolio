Feature: Consultancy Request

  As a system user
  I want to request a consultancy
  So that my needs can be evaluated by the responsible team


  Scenario: Request consultancy as an individual
    Given I am authenticated in the system
    And I access the consultancy request form
    When I fill in the form with valid individual data
    And I submit the form
    Then I should see a success message confirming the request


  Scenario: Request consultancy as a company
    Given I am authenticated in the system
    And I access the consultancy request form
    When I fill in the form with valid company data
    And I submit the form
    Then I should see a success message confirming the request


  Scenario: Submit consultancy form without required fields
    Given I am authenticated in the system
    And I access the consultancy request form
    When I try to submit the form without filling in the required fields
    Then I should see validation messages indicating the required fields
    And I should be informed that accepting the terms of use is mandatory

  Scenario: Submit consultancy form with an invalid document
    Given I am authenticated in the system
    And I access the consultancy request form
    When I fill in the form with an invalid document
    And I submit the form
    Then I should see a validation message indicating the document is invalid
    And the form should not be submitted


  Scenario: Submit consultancy form without accepting the terms of use
    Given I am authenticated in the system
    And I access the consultancy request form
    When I fill in the form with valid data
    And I submit the form without accepting the terms of use
    Then I should see a message indicating that accepting the terms of use is required
    And the form should not be submitted

  Scenario: Submit consultancy form with only required fields filled
    Given I am authenticated in the system
    And I access the consultancy request form
    When I fill in only the required fields in the form
    And I submit the form
    Then I should see a success message confirming the request
