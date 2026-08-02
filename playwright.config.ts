import { defineConfig } from '@playwright/test';
import testDir from './playwright-bdd.config';

export default defineConfig({
  testDir,

  timeout: 40 * 1000,

  expect: {
    timeout: 5000,
  },

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  workers: process.env.CI ? 1 : undefined,

  reporter: [
['html'],
['allure-playwright']
],

  use: {
    trace: 'retain-on-failure',
    screenshot:'on'
  },
});
``