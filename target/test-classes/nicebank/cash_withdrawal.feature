
Feature: cash withdrawal

  Scenario: successful withdrawal from account in credit
    Given my account has been credited with $100.00
    When I withdraw $20.00
    Then $20.00 should be dispensed
    And the balance of my account should be $80.00
