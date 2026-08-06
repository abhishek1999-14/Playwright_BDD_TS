# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\features\loginwithvalidcreds.feature.spec.js >> Login with valid credentials >> User tries to login with valid credentials >> Example #2
- Location: .features-gen\tests\features\loginwithvalidcreds.feature.spec.js:14:5

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
- generic [active] [ref=f11e1]:
  - banner [ref=f11e2]:
    - generic [ref=f11e5]:
      - link [ref=f11e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=f11e9]
      - list [ref=f11e12]:
        - listitem [ref=f11e13]:
          - link " Home" [ref=f11e14] [cursor=pointer]:
            - /url: /
            - generic [ref=f11e15]: 
            - text: Home
        - listitem [ref=f11e16]:
          - link " Products" [ref=f11e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=f11e18]: 
            - text: Products
        - listitem [ref=f11e19]:
          - link " Cart" [ref=f11e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=f11e21]: 
            - text: Cart
        - listitem [ref=f11e22]:
          - link " Signup / Login" [ref=f11e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=f11e24]: 
            - text: Signup / Login
        - listitem [ref=f11e25]:
          - link " Test Cases" [ref=f11e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=f11e27]: 
            - text: Test Cases
        - listitem [ref=f11e28]:
          - link " API Testing" [ref=f11e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=f11e30]: 
            - text: API Testing
        - listitem [ref=f11e31]:
          - link " Video Tutorials" [ref=f11e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=f11e33]: 
            - text: Video Tutorials
        - listitem [ref=f11e34]:
          - link " Contact us" [ref=f11e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=f11e36]: 
            - text: Contact us
  - generic [ref=f11e39]:
    - generic [ref=f11e41]:
      - heading "Login to your account" [level=2] [ref=f11e42]
      - generic [ref=f11e43]:
        - textbox "Email Address" [ref=f11e44]: alex123@gmail.com
        - textbox "Password" [ref=f11e45]: password456
        - paragraph [ref=f11e46]: Your email or password is incorrect!
        - button "Login" [ref=f11e47] [cursor=pointer]
    - heading "OR" [level=2] [ref=f11e49]
    - generic [ref=f11e51]:
      - heading "New User Signup!" [level=2] [ref=f11e52]
      - generic [ref=f11e53]:
        - textbox "Name" [ref=f11e54]
        - textbox "Email Address" [ref=f11e55]
        - button "Signup" [ref=f11e56] [cursor=pointer]
  - contentinfo [ref=f11e57]:
    - generic [ref=f11e62]:
      - heading "Subscription" [level=2] [ref=f11e63]
      - generic [ref=f11e64]:
        - textbox "Your email address" [ref=f11e65]
        - button "" [ref=f11e66] [cursor=pointer]
        - paragraph [ref=f11e68]: Get the most recent updates from our site and be updated your self...
    - paragraph [ref=f11e72]: Copyright © 2021 All rights reserved
  - text: 
  - insertion [ref=f11e74]:
    - generic [ref=f11e77]:
      - heading "These are topics related to the article that might interest you" [level=2] [ref=f11e79]: Discover more
      - link "API testing services" [ref=f11e80] [cursor=pointer]
      - link "Test case design" [ref=f11e85] [cursor=pointer]
      - link "Software" [ref=f11e90] [cursor=pointer]
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