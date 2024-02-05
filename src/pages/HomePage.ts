import { Page, expect } from "@playwright/test";
import logger from "../utils/LoggerUtil";
import ContactPage from "./ContactPage";

export default class HomePage {

   private readonly appLauncherLocator = "App Launcher";
   private readonly serviceOptionLocator = "Service";
   private readonly homeTabTitleLocator = "Home";
   private readonly contactsLinkLocator = "Contacts";

   constructor(private page: Page) {

   }

   async expectHomeTabToBeVisible() {
      await expect(this.page.getByTitle(this.homeTabTitleLocator)).toBeVisible({ 
         timeout: 15000
      }).catch((error) => {
         logger.error(`Login failed: ${error}`);
         throw error; // rethrow the error if needed
      }).then(() => logger.info("Home Tab is visible"));
   }

   async navigateToContactTab(){
      await this.page.getByRole('button', { name: this.appLauncherLocator }).click();
      logger.info("App Launcher Waffle Menu is clicked");
      await this.page.getByRole('option', { name: this.serviceOptionLocator, exact: true }).click();
      logger.info("Service Option is clicked");
      await expect(this.page.getByRole('link', {name: this.contactsLinkLocator })).toBeVisible();
      logger.info("Contacts Tab is visible");
      await this.page.getByRole('link', {name: this.contactsLinkLocator }).click();
      logger.info("Contacts Tab is clicked");
      return new ContactPage(this.page);
   }
}

