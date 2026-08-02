Feature: Login with invalid credentials

  Scenario: User tries to login with wrong credentials
    Given user navigates to the login page
    When user enters invalid email "wronguser@test.com"
    And user enters invalid password "wrongpassword"
    And user clicks the login button
    Then user should see the login failure message "Your email or password is incorrect!"