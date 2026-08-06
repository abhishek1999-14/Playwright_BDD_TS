# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\features\loginwithvalidcreds.feature.spec.js >> Login with valid credentials >> User tries to login with valid credentials >> Example #3
- Location: .features-gen\tests\features\loginwithvalidcreds.feature.spec.js:20:5

# Error details

```
Test timeout of 40000ms exceeded.
```

```
Error: locator.textContent: Test timeout of 40000ms exceeded.
Call log:
  - waiting for locator('//b')

```

# Page snapshot

```yaml
- generic [active] [ref=f43e1]:
  - banner [ref=f43e2]:
    - generic [ref=f43e5]:
      - link [ref=f43e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=f43e9]
      - list [ref=f43e12]:
        - listitem [ref=f43e13]:
          - link " Home" [ref=f43e14] [cursor=pointer]:
            - /url: /
            - generic [ref=f43e15]: 
            - text: Home
        - listitem [ref=f43e16]:
          - link " Products" [ref=f43e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=f43e18]: 
            - text: Products
        - listitem [ref=f43e19]:
          - link " Cart" [ref=f43e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=f43e21]: 
            - text: Cart
        - listitem [ref=f43e22]:
          - link " Signup / Login" [ref=f43e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=f43e24]: 
            - text: Signup / Login
        - listitem [ref=f43e25]:
          - link " Test Cases" [ref=f43e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=f43e27]: 
            - text: Test Cases
        - listitem [ref=f43e28]:
          - link " API Testing" [ref=f43e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=f43e30]: 
            - text: API Testing
        - listitem [ref=f43e31]:
          - link " Video Tutorials" [ref=f43e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=f43e33]: 
            - text: Video Tutorials
        - listitem [ref=f43e34]:
          - link " Contact us" [ref=f43e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=f43e36]: 
            - text: Contact us
  - generic [ref=f43e39]:
    - generic [ref=f43e41]:
      - heading "Login to your account" [level=2] [ref=f43e42]
      - generic [ref=f43e43]:
        - textbox "Email Address" [ref=f43e44]: maria123@gmail.com
        - textbox "Password" [ref=f43e45]: password789
        - paragraph [ref=f43e46]: Your email or password is incorrect!
        - button "Login" [ref=f43e47] [cursor=pointer]
    - heading "OR" [level=2] [ref=f43e49]
    - generic [ref=f43e51]:
      - heading "New User Signup!" [level=2] [ref=f43e52]
      - generic [ref=f43e53]:
        - textbox "Name" [ref=f43e54]
        - textbox "Email Address" [ref=f43e55]
        - button "Signup" [ref=f43e56] [cursor=pointer]
  - contentinfo [ref=f43e57]:
    - generic [ref=f43e62]:
      - heading "Subscription" [level=2] [ref=f43e63]
      - generic [ref=f43e64]:
        - textbox "Your email address" [ref=f43e65]
        - button "" [ref=f43e66] [cursor=pointer]
        - paragraph [ref=f43e68]: Get the most recent updates from our site and be updated your self...
    - paragraph [ref=f43e72]: Copyright © 2021 All rights reserved
  - text: 
  - insertion [ref=f43e74]:
    - iframe [ref=f43e76]:
      
```

# Test source

```ts
  1  | import { createBdd } from 'playwright-bdd';
  2  | import { test, expect } from '../../src/fixtures/fixtures';
  3  | //import { test } from '../fixtures/fixture';
  4  | 
  5  | const { Given, When, Then } = createBdd(test);
  6  | import { LoginPage } from '../../pages/LoginPage';  
  7  | 
  8  | Given('user navigates to the login page', async ({ loginpage }) => {
  9  |   //const loginpage= new LoginPage(page);
  10 |    await loginpage.goto()
  11 | });
  12 | 
  13 | When('user enters invalid email {string}',
  14 |   async ({ loginpage }, email: string) => {
  15 |     await loginpage.enterlogin(email)
  16 |   }
  17 | );
  18 | 
  19 | When('user enters invalid password {string}',
  20 |     async ({ loginpage }, password: string) => {
  21 |     //const loginpage= new LoginPage(page);
  22 |     await loginpage.password.fill(password)
  23 | 
  24 |     }
  25 | );
  26 | 
  27 | When('user clicks the login button',
  28 |     async ({ loginpage },) => {
  29 |    // const loginpage= new LoginPage(page);
  30 |    await loginpage.clickloginbtn();
  31 |     }
  32 | );
  33 | 
  34 | 
  35 | Then(
  36 |   'user should see the login failure message {string}',
  37 |   async ({ page }, expectedMessage: string) => {
  38 |     await expect(
  39 |       page.locator('p[style="color: red;"]')
  40 |     ).toHaveText(expectedMessage);
  41 |   }
  42 | 
  43 |   
  44 | );
  45 | 
  46 | Then('Create newuser with valid details {string} {string} {string}',
  47 | async ({ loginpage }, uname: string, emailid: string, password: string) => {
  48 | //const loginpage= new LoginPage(page);
  49 | await loginpage.createnewuser(uname,emailid,password)
  50 | 
  51 | })
  52 | 
  53 | Then ('Login with valid creds {string} {string}',async({loginpage},User:string,password:string)=>
  54 | {
  55 |   //const loginpage=new LoginPage(page);
  56 |   await loginpage.loginvaliduser(User,password)
  57 | })
  58 | 
  59 | Then('Validate user able to login {string}',
  60 | 
  61 | async ({ loginpage }, User: string) => {
  62 | //const loginpage = new LoginPage(page);
> 63 | const title = await loginpage.usertitle.textContent();
     |                                         ^ Error: locator.textContent: Test timeout of 40000ms exceeded.
  64 |  expect(title?.trim()).toEqual(User);
  65 | console.log(title)
  66 | }
  67 | );
  68 | 
  69 | //comment
```