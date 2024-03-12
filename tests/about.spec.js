import {expect, test} from "@playwright/test";
import assignPageObjects from "./utility/assignPageObjects";
import textContents from "./utility/textContents";

test.describe('Pandoc About Page', () => {
  // This is technically the same as the home page, and I'd title it differently for a cleaner delineation
  // But in the interest of time I'm splitting the navbar functionality in the home page from the elements of
  // the about page

  test('About page elements should be visible', async ({ page }) => {
    const { about } = await assignPageObjects(page)
    await about.open();

    await expect(about.diagram).toBeVisible();
    await expect(about.intro).toBeVisible();
    await expect(about.formatList).toBeVisible();

    // Time constraint: I would also verify that the paragraphs of text underneath the list of formats exist
  })

  test('About page intro should have the correct text', async ({ page }) => {
    const { about } = await assignPageObjects(page)
    await about.open();

    await expect(about.intro).toHaveText(textContents.aboutIntro)
  })
})