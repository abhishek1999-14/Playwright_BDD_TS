@Signup
Feature: Create new user with valid credentials

  Scenario Outline: User Creates the valid login user
    Given user navigates to the login page
    Then Create newuser with valid details "<name>" "<email>" "<password>"
    
    Examples:
      | name           | email              | password     |
      | Tatiana Main    | rag523@gmail.com   | password123  |
      | Alex Johnso    | alx123@gmail.com   | password456  |
      | Maria Garci   | maria123@gmail.com  | password789  |
      | Mount blan     | mout123@gmail.com | password000   |