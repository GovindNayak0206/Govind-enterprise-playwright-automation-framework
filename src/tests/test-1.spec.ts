import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testingpractice-dev-ed.develop.my.salesforce.com/');
  //Login Page
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('gnayak0206@gmail.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('SalesforceTesting2024');
  await page.getByRole('button', { name: 'Log In' }).click();
  //Home Page
  await page.getByRole('button', { name: 'App Launcher' }).click();
  await page.getByRole('option', { name: 'Service', exact: true }).click();
  await page.getByRole('link', { name: 'Contacts' }).click();
  //Contacts Page
  await page.getByRole('button', { name: 'New' }).click();

  
});