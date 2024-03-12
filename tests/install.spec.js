import {expect, test} from "@playwright/test";
import assignPageObjects from "./utility/assignPageObjects";

test.describe('Pandoc Installation Page', () => {
  test('Install button should be visible', async ({ page }) => {
    const { install } = await assignPageObjects(page)
    await install.open();

    await expect(install.installButton).toBeVisible();
  })

  test('Clicking Install button should take user to Pandoc release page', async ({ page }) => {
    const { install } = await assignPageObjects(page)
    await install.open();
    await install.installButton.click();

    await expect(page).toHaveURL(/^https:\/\/github\.com\/jgm\/pandoc\/releases/)
  })
})