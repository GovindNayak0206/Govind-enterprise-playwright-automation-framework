import { Page, expect } from "@playwright/test";

export default class HomePage {

   private readonly setupTitleLocator = "Home";

   constructor(private page: Page) {

   }

   async expectHomeTabToBeVisible() {
      await expect(this.page.getByTitle(this.setupTitleLocator)).toBeVisible({ timeout: 15000 });
   }
}

