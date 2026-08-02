import{Locator,Page} from "@playwright/test"
export class ProductsPage{
    page:Page
    username:Locator
    password:Locator
    loginbtn:Locator
    name:Locator
    signupemail:Locator
    signupbutton:Locator
    usertitle:Locator

    constructor(page:Page)
    {
        this.page=page;
        this.username=page.locator('input[data-qa="login-email"]')
        this.password=page.locator('input[data-qa="login-password"]')
        this.loginbtn=page.locator('button[data-qa="login-button"]')
        this.name=page.locator("//input[@data-qa='signup-name']")
        this.signupemail=page.locator("//input[@data-qa='signup-email']")
        this.signupbutton=page.locator("//button[@data-qa='signup-button']")
        this.usertitle=page.locator("//b")
    }

    async goto(){
        await this.page.goto('https://automationexercise.com/login');
    }

    async enterlogin(username:string)
    
    {
        await this.username.fill(username)
    
    }
    async enterpassword(password:string)
    {
         await this.password.fill(password)

    }

    async clickloginbtn(){
         await this.loginbtn.click();

    }

    async waitfor(seconds: number): Promise<void> {

      return new Promise((resolve) => {

      setTimeout(resolve, seconds * 1000);

          });
}

async loginvaliduser(Username:string,Password:string)
{
    await this.username.fill(Username)
    await this.password.fill(Password)
    await this.loginbtn.click()
}

    async createnewuser(name:string,signupemail:string,password:string){
        await this.name.fill(name)
        await this.signupemail.fill(signupemail)
        await this.signupbutton.click()
        await this.waitfor(4)
        await this.page.locator('#id_gender1').check(); // Mr

    await this.page.locator('input[data-qa="password"]').fill(password);

    await this.page.locator('select[data-qa="days"]').selectOption('10');
    await this.page.locator('select[data-qa="months"]').selectOption('5');
    await this.page.locator('select[data-qa="years"]').selectOption('1995');

    await this.page.locator('#newsletter').check();
    await this.page.locator('#optin').check();

    // Address Information
    await this.page.locator('input[data-qa="first_name"]').fill('Abhishek');
    await this.page.locator('input[data-qa="last_name"]').fill('Raghav');
    await this.page.locator('input[data-qa="company"]').fill('My Company');

    await this.page.locator('input[data-qa="address"]').fill('Sector 21');
    await this.page.locator('input[data-qa="address2"]').fill('Near Metro');

    await this.page.locator('select[data-qa="country"]').selectOption('India');

    await this.page.locator('input[data-qa="state"]').fill('Haryana');
    await this.page.locator('input[data-qa="city"]').fill('Gurgaon');
    await this.page.locator('input[data-qa="zipcode"]').fill('122001');
    await this.page.locator('input[data-qa="mobile_number"]').fill('9876543210');

    await this.page.locator('button[data-qa="create-account"]').click();



    }
}