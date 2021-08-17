Feature: Search The Site

  Scenario Outline: As a user, I can search for items and add them to the cart

    Given I am on the homepage page
    When I type "dress" into the search box 
    Then click on search 
    Then select a dress
    Then change the size  
    Then add it to the cart
    Then proceed to checkout
    
    # Given I am on the homepage page 
    # When I type "auto parts"
    # Then I click on search button
    # Then I should see a message saying "No results were found"

    # Examples:
    # | search      | search keyword | message |
    # | shoes       |            | "No results were found for your search" |
   
