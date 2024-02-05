import { Page } from "@playwright/test";
import HomePage from "../pages/HomePage";
import logger from "../utils/LoggerUtil";

export default class LoginPage {
   private readonly usernameInputSelector = "#username";
   private readonly passwordInpuLocator = "#password";
   private readonly loginButtonSelector = "#Login";


   constructor(private page: Page) {

   }

   async navigateToLoginPage() {
      await this.page.goto("/");
      logger.info("Navigated to login page");
   }

   async fillUsername(username: string) {
      await this.page.locator(this.usernameInputSelector).fill(username);
      logger.info("Filled username");
   }

   async fillPassword(password: string) {
      await this.page.locator(this.passwordInpuLocator).fill(password);
      logger.info("Filled password");
   }

   async clickLoginButton() {
      await this.page
         .locator(this.loginButtonSelector)
         .click()
         .catch((error) => {
            logger.error(`Error clicking login button: ${error}`)
            throw error; // rethrow the error if needed
         }).then(() => logger.info("Login Button is clicked"));

         const homePage = new HomePage(this.page);
         return homePage;
   }
}