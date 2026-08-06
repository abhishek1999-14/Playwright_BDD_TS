# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\features\signup.feature.spec.js >> Create new user with valid credentials >> User Creates the valid login user >> Example #2
- Location: .features-gen\tests\features\signup.feature.spec.js:13:5

# Error details

```
Test timeout of 40000ms exceeded.
```

```
Error: locator.check: Test timeout of 40000ms exceeded.
Call log:
  - waiting for locator('#id_gender1')

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
        - textbox "Email Address" [ref=f11e44]
        - textbox "Password" [ref=f11e45]
        - button "Login" [ref=f11e46] [cursor=pointer]
    - heading "OR" [level=2] [ref=f11e48]
    - generic [ref=f11e50]:
      - heading "New User Signup!" [level=2] [ref=f11e51]
      - generic [ref=f11e52]:
        - textbox "Name" [ref=f11e53]: Alex Johnson
        - textbox "Email Address" [ref=f11e54]: alex123@gmail.com
        - paragraph [ref=f11e55]: Email Address already exist!
        - button "Signup" [ref=f11e56] [cursor=pointer]
  - contentinfo [ref=f11e57]:
    - generic [ref=f11e59]:
      - generic [ref=f11e62]:
        - heading "Subscription" [level=2] [ref=f11e63]
        - generic [ref=f11e64]:
          - textbox "Your email address" [ref=f11e65]
          - button "" [ref=f11e66] [cursor=pointer]
          - paragraph [ref=f11e68]: Get the most recent updates from our site and be updated your self...
      - insertion [ref=f11e70]:
        - generic [ref=f11e73]:
          - heading "These are topics related to the article that might interest you" [level=2] [ref=f11e75]: Discover more
          - link "Test automation tools" [ref=f11e76] [cursor=pointer]
          - link "API testing guide" [ref=f11e81] [cursor=pointer]
          - link "Secure login systems" [ref=f11e86] [cursor=pointer]
    - paragraph [ref=f11e94]: Copyright © 2021 All rights reserved
  - text: 
```

# Test source

```ts
  1  | import{Locator,Page} from "@playwright/test"
  2  | export class LoginPage{
  3  |     page:Page
  4  |     username:Locator
  5  |     password:Locator
  6  |     loginbtn:Locator
  7  |     name:Locator
  8  |     signupemail:Locator
  9  |     signupbutton:Locator
  10 |     usertitle:Locator
  11 | 
  12 |     constructor(page:Page)
  13 |     {
  14 |         this.page=page;
  15 |         this.username=page.locator('input[data-qa="login-email"]')
  16 |         this.password=page.locator('input[data-qa="login-password"]')
  17 |         this.loginbtn=page.locator('button[data-qa="login-button"]')
  18 |         this.name=page.locator("//input[@data-qa='signup-name']")
  19 |         this.signupemail=page.locator("//input[@data-qa='signup-email']")
  20 |         this.signupbutton=page.locator("//button[@data-qa='signup-button']")
  21 |         this.usertitle=page.locator("//b")
  22 |     }
  23 | 
  24 |     async goto(){
  25 |         await this.page.goto('https://automationexercise.com/login');
  26 |     }
  27 | 
  28 |     async enterlogin(username:string)
  29 |     
  30 |     {
  31 |         await this.username.fill(username)
  32 |     
  33 |     }
  34 |     async enterpassword(password:string)
  35 |     {
  36 |          await this.password.fill(password)
  37 | 
  38 |     }
  39 | 
  40 |     async clickloginbtn(){
  41 |          await this.loginbtn.click();
  42 | 
  43 |     }
  44 | 
  45 |     async waitfor(seconds: number): Promise<void> {
  46 | 
> 47 |       return new Promise((resolve) => {
     |                                            ^ Error: locator.check: Test timeout of 40000ms exceeded.
  48 | 
  49 |       setTimeout(resolve, seconds * 1000);
  50 | 
  51 |           });
  52 | }
  53 | 
  54 | async loginvaliduser(Username:string,Password:string)
  55 | {
  56 |     await this.username.fill(Username)
  57 |     await this.password.fill(Password)
  58 |     await this.loginbtn.click()
  59 | }
  60 | 
  61 |     async createnewuser(name:string,signupemail:string,password:string){
  62 |         await this.name.fill(name)
  63 |         await this.signupemail.fill(signupemail)
  64 |         await this.signupbutton.click()
  65 |         await this.waitfor(4)
  66 |         await this.page.locator('#id_gender1').check(); // Mr
  67 | 
  68 |     await this.page.locator('input[data-qa="password"]').fill(password);
  69 | 
  70 |     await this.page.locator('select[data-qa="days"]').selectOption('10');
  71 |     await this.page.locator('select[data-qa="months"]').selectOption('5');
  72 |     await this.page.locator('select[data-qa="years"]').selectOption('1995');
  73 | 
  74 |     await this.page.locator('#newsletter').check();
  75 |     await this.page.locator('#optin').check();
  76 | 
  77 |     // Address Information
  78 |     await this.page.locator('input[data-qa="first_name"]').fill('Abhishek');
  79 |     await this.page.locator('input[data-qa="last_name"]').fill('Raghav');
  80 |     await this.page.locator('input[data-qa="company"]').fill('My Company');
  81 | 
  82 |     await this.page.locator('input[data-qa="address"]').fill('Sector 21');
  83 |     await this.page.locator('input[data-qa="address2"]').fill('Near Metro');
  84 | 
  85 |     await this.page.locator('select[data-qa="country"]').selectOption('India');
  86 | 
  87 |     await this.page.locator('input[data-qa="state"]').fill('Haryana');
  88 |     await this.page.locator('input[data-qa="city"]').fill('Gurgaon');
  89 |     await this.page.locator('input[data-qa="zipcode"]').fill('122001');
  90 |     await this.page.locator('input[data-qa="mobile_number"]').fill('9876543210');
  91 | 
  92 |     await this.page.locator('button[data-qa="create-account"]').click();
  93 | 
  94 | 
  95 | 
  96 |     }
  97 | }
```