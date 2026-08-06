// Generated from: tests\features\signup.feature
import { test } from "../../../src/fixtures/fixtures.ts";

test.describe('Create new user with valid credentials', () => {

  test.describe('User Creates the valid login user', () => {

    test('Example #1', { tag: ['@Signup'] }, async ({ Given, Then, loginpage }) => { 
      await Given('user navigates to the login page', null, { loginpage }); 
      await Then('Create newuser with valid details "Tatiana Main" "rag523@gmail.com" "password123"', null, { loginpage }); 
    });

    test('Example #2', { tag: ['@Signup'] }, async ({ Given, Then, loginpage }) => { 
      await Given('user navigates to the login page', null, { loginpage }); 
      await Then('Create newuser with valid details "Alex Johnso" "alx123@gmail.com" "password456"', null, { loginpage }); 
    });

    test('Example #3', { tag: ['@Signup'] }, async ({ Given, Then, loginpage }) => { 
      await Given('user navigates to the login page', null, { loginpage }); 
      await Then('Create newuser with valid details "Maria Garci" "maria123@gmail.com" "password789"', null, { loginpage }); 
    });

    test('Example #4', { tag: ['@Signup'] }, async ({ Given, Then, loginpage }) => { 
      await Given('user navigates to the login page', null, { loginpage }); 
      await Then('Create newuser with valid details "Mount blan" "mout123@gmail.com" "password000"', null, { loginpage }); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\signup.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":8,"pickleLine":10,"tags":["@Signup"],"steps":[{"pwStepLine":9,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given user navigates to the login page","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then Create newuser with valid details \"Tatiana Main\" \"rag523@gmail.com\" \"password123\"","stepMatchArguments":[{"group":{"start":34,"value":"\"Tatiana Main\"","children":[{"start":35,"value":"Tatiana Main","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":49,"value":"\"rag523@gmail.com\"","children":[{"start":50,"value":"rag523@gmail.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":68,"value":"\"password123\"","children":[{"start":69,"value":"password123","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":13,"pickleLine":11,"tags":["@Signup"],"steps":[{"pwStepLine":14,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given user navigates to the login page","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then Create newuser with valid details \"Alex Johnso\" \"alx123@gmail.com\" \"password456\"","stepMatchArguments":[{"group":{"start":34,"value":"\"Alex Johnso\"","children":[{"start":35,"value":"Alex Johnso","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":48,"value":"\"alx123@gmail.com\"","children":[{"start":49,"value":"alx123@gmail.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":67,"value":"\"password456\"","children":[{"start":68,"value":"password456","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":18,"pickleLine":12,"tags":["@Signup"],"steps":[{"pwStepLine":19,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given user navigates to the login page","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then Create newuser with valid details \"Maria Garci\" \"maria123@gmail.com\" \"password789\"","stepMatchArguments":[{"group":{"start":34,"value":"\"Maria Garci\"","children":[{"start":35,"value":"Maria Garci","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":48,"value":"\"maria123@gmail.com\"","children":[{"start":49,"value":"maria123@gmail.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":69,"value":"\"password789\"","children":[{"start":70,"value":"password789","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":23,"pickleLine":13,"tags":["@Signup"],"steps":[{"pwStepLine":24,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given user navigates to the login page","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then Create newuser with valid details \"Mount blan\" \"mout123@gmail.com\" \"password000\"","stepMatchArguments":[{"group":{"start":34,"value":"\"Mount blan\"","children":[{"start":35,"value":"Mount blan","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":47,"value":"\"mout123@gmail.com\"","children":[{"start":48,"value":"mout123@gmail.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":67,"value":"\"password000\"","children":[{"start":68,"value":"password000","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end