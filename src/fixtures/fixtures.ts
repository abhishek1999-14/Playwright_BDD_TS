import { test as base } from 'playwright-bdd';
import {Browser, expect,Page} from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import {ContactusPage} from '../../pages/ContactusPage';
import { CartPage } from '../../pages/CartPage';
import { ProductsPage } from '../../pages/ProdcutsPage';

type MyFixtures = {
  newpage: Page;
  newbrowser: Page;

  loginpage: LoginPage;
  contactuspage: ContactusPage;
  cartpage: CartPage;
  productspage: ProductsPage;
};

export const test = base.extend<MyFixtures>({

//   newpage: async ({ page }, use) => {
//     const newPage = await page.context().newPage();

//     await use(newPage);

//     await newPage.close();
//   },

//   newbrowser: async ({ browser }, use) => {
//     const context = await browser.newContext();

//     const newPage = await context.newPage();

//     await use(newPage);

//     await context.close();
//   },

  loginpage: async ({ page }, use) => {
  console.log("LoginPage fixture initialized");
  await use(new LoginPage(page));
},

  contactuspage: async ({ page }, use) => {
    await use(new ContactusPage(page));
  },

  cartpage: async ({ page }, use) => {
    await use(new CartPage(page));
  },

  productspage: async ({ page }, use) => {
    await use(new ProductsPage(page));
  }

});
export { expect } from '@playwright/test';