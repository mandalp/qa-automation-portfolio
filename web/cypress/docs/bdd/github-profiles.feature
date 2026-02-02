Feature: GitHub Profiles Management

  As a system user
  I want to manage GitHub profiles
  So that I can keep a list of profiles up to date


  Scenario: Create a GitHub profile
    Given I am authenticated in the system
    And I access the GitHub profiles page
    When I fill in the profile form with valid data
    And I submit the form
    Then the profile should be displayed in the profiles table


  Scenario: Create multiple GitHub profiles
    Given I am authenticated in the system
    And I access the GitHub profiles page
    When I create multiple GitHub profiles with valid data
    Then all created profiles should be displayed in the profiles table


  Scenario: Remove a GitHub profile
    Given a GitHub profile exists in the system
    And I access the GitHub profiles page
    When I remove the profile
    Then the profile should no longer be displayed in the profiles table


  Scenario: Submit the GitHub profile form with missing required fields
    Given I am authenticated in the system
    And I access the GitHub profiles page
    When I try to submit the profile form without filling in the required fields
    Then I should see validation messages indicating the required fields
    

  Scenario: Open a GitHub profile in a new tab
    Given a GitHub profile exists in the system
    And I access the GitHub profiles page
    When I open the profile in a new tab
    Then the GitHub profile page should be displayed in the new tab

  Scenario: Search for a GitHub profile
    Given multiple GitHub profiles exist in the system
    And I access the GitHub profiles page
    When I search for a specific GitHub profile by username
    Then only the matching profile should be displayed in the profiles table





