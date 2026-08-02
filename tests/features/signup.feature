Feature: Create new user with valid credentials

  Scenario: User Creates the valid login user
    Given user navigates to the login page
    Then Create newuser with valid details "Tatiana Rag" "rag123@gmail.com" "password123"
    