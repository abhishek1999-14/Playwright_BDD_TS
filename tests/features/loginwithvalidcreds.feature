Feature: Login with valid credentials

  Scenario: User tries to login with valid credentials
    Given user navigates to the login page
    Then Login with valid creds "rag123@gmail.com" "password123"
    And Validate user able to login "Tatiana Rag"