// Test script using Page Object Model
import { test } from "@playwright/test";
import LoginPage from "../pages/LoginPage";
import { encrypt, decrypt } from "../utils/CryptojsUtil";
import { encryptEnvFile, decryptEnvFile } from "../utils/EncryptEnvFile";
import logger from "../utils/LoggerUtil";

test("test", async ({ page}) => {

   const loginPage = new LoginPage(page);
   await loginPage.navigateToLoginPage();
   // await loginPage.fillUsername("gnayak0206@gmail.com");
   // await loginPage.fillPassword("SalesforceTesting2024");
   await loginPage.fillUsername(decrypt(process.env.userid!));
   await loginPage.fillPassword(decrypt(process.env.password!));
   const homePage = await loginPage.clickLoginButton();
   await homePage.expectHomeTabToBeVisible();
   logger.info("Test for login is completed");
});

test.skip("Sample env test", async ({ page }) => {
   // const plaintext = 'Hello, Mars!';
   // const encryptedText = encrypt(plaintext);
   // console.log('SALT: ', process.env.SALT);
   // console.log('Encrypted: ', encryptedText);
   // const decryptedText = decrypt(encryptedText);
   // console.log('Decrypted: ', decryptedText);
   encryptEnvFile();
   // console.log(decrypt(""));
});

test("Check decryption of creds stored in env variables", async ({ page }) => {
   console.log("SALT: ", process.env.SALT);
   const decryptedUsername = decrypt(process.env.userid!);
   console.log('Decrypted Username: ', decryptedUsername);
   const decryptedPassword = decrypt(process.env.password!);
   console.log('Decrypted Password: ', decryptedPassword);
   //encryptEnvFile();
   // console.log(decrypt(""));
});