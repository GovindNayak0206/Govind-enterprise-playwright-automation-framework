// Test script using Page Object Model
import { test } from "@playwright/test";
import LoginPage from "../pages/LoginPage";

test("test", async ({ page}) => {

   const loginPage = new LoginPage(page);

   await loginPage.navigateToLoginPage();
   await loginPage.fillUsername("gnayak0206@gmail.com");
   await loginPage.fillPassword("SalesforceTesting2024");

   const homePage = await loginPage.clickLoginButton();
   await homePage.expectHomeTabToBeVisible();
});
