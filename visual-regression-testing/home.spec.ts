import { test, expect } from "@playwright/test";
import { viewports } from "./conf";

test("take screenshots", async ({ page }, info) => {
  for (const viewport of viewports) {
    await page.goto("http://localhost:3001");

    await page.setViewportSize(viewport);

    const fileName = `${info.title}_${viewport.name}.png`;

    try {
      await expect(page).toHaveScreenshot(fileName);
    } catch (error) {
      console.error("failed to take screenshot of home page", error);
      throw error;
    }
  }
});
