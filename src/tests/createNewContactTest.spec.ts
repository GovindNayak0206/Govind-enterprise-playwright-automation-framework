import { test } from "@playwright/test";
import { decrypt } from "../utils/CryptojsUtil";
import logger from "../utils/LoggerUtil";

import LoginPage from "../pages/LoginPage";

test("simple DD test", async ({ page }) => {
   logger.info("Test for Contact Creation is started...");
   const fname = "John";
   const lname = "Smith";
   const loginPage = new LoginPage(page);
   await loginPage.navigateToLoginPage();
   await loginPage.fillUsername(decrypt(process.env.userid!));
   await loginPage.fillPassword(decrypt(process.env.password!));
   const homePage = await loginPage.clickLoginButton();
   await homePage.expectHomeTabToBeVisible();
   const contactsPage = await homePage.navigateToContactTab();
   await contactsPage.createNewContact(fname, lname);
   await contactsPage.expectContactLabelContainsFirstNameAndLastName(
     fname,
     lname
   );
   logger.info("Test for Contact Creation is completed");
 });