Feature: Angular Playwright Demo

  Scenario: Display entered text when the button is clicked
    Given I am on the Angular app homepage
    When I enter "Hello Playwright!" in the input field
    And I click the "Display Text" button
    Then I should see "Hello Playwright!" displayed

  Scenario: Increment the counter when the increment button is clicked
    Given I am on the Angular app homepage
    When I click the "Increment" button
    Then the counter value should be 1

  Scenario: Decrement the counter when the decrement button is clicked
    Given I am on the Angular app homepage
    And I click the "Increment" button
    And I click the "Increment" button
    When I click the "Decrement" button
    Then the counter value should be 1

  Scenario: Counter should not decrement below zero
    Given I am on the Angular app homepage
    When I click the "Decrement" button
    Then the counter value should be 0
