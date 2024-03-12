import {expect, test} from "@playwright/test";
import assignPageObjects from "./utility/assignPageObjects";

test.describe('Pandoc Demos Page', () => {
  test('Demos link should be visible', async ({ page }) => {
    const { demos } = await assignPageObjects(page)
    await demos.open();

    await expect(demos.demoLink).toBeVisible();
  })

  test('Clicking Demos link should take user to Pandoc demo page', async ({ page }) => {
    const { demos } = await assignPageObjects(page)
    await demos.open();
    await demos.demoLink.click();

    await expect(page).toHaveURL('https://pandoc.org/try/');
  })
})