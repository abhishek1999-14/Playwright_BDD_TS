@login
Feature: Login with valid credentials

  Scenario Outline: User tries to login with valid credentials
    Given user navigates to the login page
    Then Login with valid creds "<email>" "<password>"
    And Validate user able to login "<name>"
  Examples:
      | name           | email              | password     |
      | Tatiana Main    | rag523@gmail.com   | password123  |
      | Alex Johnso    | alx123@gmail.com   | password456  |
      | Mount blan     | mout123@gmail.com | password000   |