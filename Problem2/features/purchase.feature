

Feature: 
  As a consumer
  I should be able to purchase an item on Amazon

  Scenario: Purchase an item
    Given I am on eBay homepage
    When I search an item
    And add it to cart
    Then I should be able to check it out
    Then I should be able to input post address
    Then I should be able to input payment details
    Then I should be able to confirm and pay


