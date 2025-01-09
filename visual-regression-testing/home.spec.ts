import { test, expect } from "@playwright/test";
import { viewports } from "./conf";

test("take screenshots", async ({ page, browserName }, info) => {
  for (const viewport of viewports) {
    await page.goto("http://localhost:3001");

    await page.setViewportSize({
      width: viewport.width,
      height: viewport.height,
    });

    const fileName = `${info.title}_${browserName}_${viewport.name}.png`;
    try {
      await expect(page).toHaveScreenshot(fileName, { timeout: 5000 });
    } catch (error) {
      console.error("failed to take screenshot of home page", error);
      throw error;
    }
  }
});
