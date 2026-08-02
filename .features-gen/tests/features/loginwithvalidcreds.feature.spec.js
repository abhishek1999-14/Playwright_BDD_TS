// Generated from: tests\features\loginwithvalidcreds.feature
import { test } from "../../../src/fixtures/fixtures.ts";

test.describe('Login with valid credentials', () => {

  test('User tries to login with valid credentials', async ({ Given, Then, And, loginpage }) => { 
    await Given('user navigates to the login page', null, { loginpage }); 
    await Then('Login with valid creds "rag123@gmail.com" "password123"', null, { loginpage }); 
    await And('Validate user able to login "Tatiana Rag"', null, { loginpage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\loginwithvalidcreds.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given user navigates to the login page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Outcome","textWithKeyword":"Then Login with valid creds \"rag123@gmail.com\" \"password123\"","stepMatchArguments":[{"group":{"start":23,"value":"\"rag123@gmail.com\"","children":[{"start":24,"value":"rag123@gmail.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":42,"value":"\"password123\"","children":[{"start":43,"value":"password123","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"And Validate user able to login \"Tatiana Rag\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Tatiana Rag\"","children":[{"start":29,"value":"Tatiana Rag","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end