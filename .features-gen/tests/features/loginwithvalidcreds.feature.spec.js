// Generated from: tests\features\loginwithvalidcreds.feature
import { test } from "../../../src/fixtures/fixtures.ts";

test.describe('Login with valid credentials', () => {

  test.describe('User tries to login with valid credentials', () => {

    test('Example #1', { tag: ['@login'] }, async ({ Given, Then, And, loginpage }) => { 
      await Given('user navigates to the login page', null, { loginpage }); 
      await Then('Login with valid creds "rag523@gmail.com" "password123"', null, { loginpage }); 
      await And('Validate user able to login "Tatiana Main"', null, { loginpage }); 
    });

    test('Example #2', { tag: ['@login'] }, async ({ Given, Then, And, loginpage }) => { 
      await Given('user navigates to the login page', null, { loginpage }); 
      await Then('Login with valid creds "alx123@gmail.com" "password456"', null, { loginpage }); 
      await And('Validate user able to login "Alex Johnso"', null, { loginpage }); 
    });

    test('Example #3', { tag: ['@login'] }, async ({ Given, Then, And, loginpage }) => { 
      await Given('user navigates to the login page', null, { loginpage }); 
      await Then('Login with valid creds "mout123@gmail.com" "password000"', null, { loginpage }); 
      await And('Validate user able to login "Mount blan"', null, { loginpage }); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\loginwithvalidcreds.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":8,"pickleLine":10,"tags":["@login"],"steps":[{"pwStepLine":9,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given user navigates to the login page","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then Login with valid creds \"rag523@gmail.com\" \"password123\"","stepMatchArguments":[{"group":{"start":23,"value":"\"rag523@gmail.com\"","children":[{"start":24,"value":"rag523@gmail.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":42,"value":"\"password123\"","children":[{"start":43,"value":"password123","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"And Validate user able to login \"Tatiana Main\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Tatiana Main\"","children":[{"start":29,"value":"Tatiana Main","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":14,"pickleLine":11,"tags":["@login"],"steps":[{"pwStepLine":15,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given user navigates to the login page","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then Login with valid creds \"alx123@gmail.com\" \"password456\"","stepMatchArguments":[{"group":{"start":23,"value":"\"alx123@gmail.com\"","children":[{"start":24,"value":"alx123@gmail.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":42,"value":"\"password456\"","children":[{"start":43,"value":"password456","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"And Validate user able to login \"Alex Johnso\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Alex Johnso\"","children":[{"start":29,"value":"Alex Johnso","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":20,"pickleLine":12,"tags":["@login"],"steps":[{"pwStepLine":21,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given user navigates to the login page","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then Login with valid creds \"mout123@gmail.com\" \"password000\"","stepMatchArguments":[{"group":{"start":23,"value":"\"mout123@gmail.com\"","children":[{"start":24,"value":"mout123@gmail.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":43,"value":"\"password000\"","children":[{"start":44,"value":"password000","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":23,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"And Validate user able to login \"Mount blan\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Mount blan\"","children":[{"start":29,"value":"Mount blan","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end