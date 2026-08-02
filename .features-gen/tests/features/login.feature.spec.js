// Generated from: tests\features\login.feature
import { test } from "../../../src/fixtures/fixtures.ts";

test.describe('Login with invalid credentials', () => {

  test('User tries to login with wrong credentials', async ({ Given, When, Then, And, loginpage, page }) => { 
    await Given('user navigates to the login page', null, { loginpage }); 
    await When('user enters invalid email "wronguser@test.com"', null, { loginpage }); 
    await And('user enters invalid password "wrongpassword"', null, { loginpage }); 
    await And('user clicks the login button', null, { loginpage }); 
    await Then('user should see the login failure message "Your email or password is incorrect!"', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given user navigates to the login page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When user enters invalid email \"wronguser@test.com\"","stepMatchArguments":[{"group":{"start":26,"value":"\"wronguser@test.com\"","children":[{"start":27,"value":"wronguser@test.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"And user enters invalid password \"wrongpassword\"","stepMatchArguments":[{"group":{"start":29,"value":"\"wrongpassword\"","children":[{"start":30,"value":"wrongpassword","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And user clicks the login button","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then user should see the login failure message \"Your email or password is incorrect!\"","stepMatchArguments":[{"group":{"start":42,"value":"\"Your email or password is incorrect!\"","children":[{"start":43,"value":"Your email or password is incorrect!","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end