import { createBdd } from 'playwright-bdd';
import { test, expect } from '../../src/fixtures/fixtures';
//import { test } from '../fixtures/fixture';

const { Given, When, Then } = createBdd(test);
import { LoginPage } from '../../pages/LoginPage';  

Given('user navigates to the login page', async ({ loginpage }) => {
  //const loginpage= new LoginPage(page);
   await loginpage.goto()
});

When('user enters invalid email {string}',
  async ({ loginpage }, email: string) => {
    await loginpage.enterlogin(email)
  }
);

When('user enters invalid password {string}',
    async ({ loginpage }, password: string) => {
    //const loginpage= new LoginPage(page);
    await loginpage.password.fill(password)

    }
);

When('user clicks the login button',
    async ({ loginpage },) => {
   // const loginpage= new LoginPage(page);
   await loginpage.clickloginbtn();
    }
);


Then(
  'user should see the login failure message {string}',
  async ({ page }, expectedMessage: string) => {
    await expect(
      page.locator('p[style="color: red;"]')
    ).toHaveText(expectedMessage);
  }

  
);

Then('Create newuser with valid details {string} {string} {string}',
async ({ loginpage }, uname: string, emailid: string, password: string) => {
//const loginpage= new LoginPage(page);
await loginpage.createnewuser(uname,emailid,password)

})

Then ('Login with valid creds {string} {string}',async({loginpage},User:string,password:string)=>
{
  //const loginpage=new LoginPage(page);
  await loginpage.loginvaliduser(User,password)
})

Then('Validate user able to login {string}',

async ({ loginpage }, User: string) => {
//const loginpage = new LoginPage(page);
const title = await loginpage.usertitle.textContent();
 expect(title?.trim()).toEqual(User);
console.log(title)
}
);

//comment