// Generated from: tests\features\signup.feature
import { test } from "../../../src/fixtures/fixtures.ts";

test.describe('Create new user with valid credentials', () => {

  test('User Creates the valid login user', async ({ Given, Then, loginpage }) => { 
    await Given('user navigates to the login page', null, { loginpage }); 
    await Then('Create newuser with valid details "Tatiana Rag" "rag123@gmail.com" "password123"', null, { loginpage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\signup.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given user navigates to the login page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Outcome","textWithKeyword":"Then Create newuser with valid details \"Tatiana Rag\" \"rag123@gmail.com\" \"password123\"","stepMatchArguments":[{"group":{"start":34,"value":"\"Tatiana Rag\"","children":[{"start":35,"value":"Tatiana Rag","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":48,"value":"\"rag123@gmail.com\"","children":[{"start":49,"value":"rag123@gmail.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":67,"value":"\"password123\"","children":[{"start":68,"value":"password123","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end