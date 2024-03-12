import { test, expect } from "@playwright/test";
import assignPageObjects from "./utility/assignPageObjects";

test.describe('Pandoc Home Page', () => {
  test('Title elements should be displayed', async ({ page }) => {
    const { home } = await assignPageObjects(page)
    await home.open();

    await expect(home.title).toBeVisible();
    await expect(home.subtitle).toBeVisible();
  });

  test('Navbar elements should be displayed', async ({ page }) => {
    const { home } = await assignPageObjects(page)
    await home.open();

    await expect(home.aboutLink).toBeVisible();
    await expect(home.installingLink).toBeVisible();
    await expect(home.demosLink).toBeVisible();
    await expect(home.documentationDropdown).toBeVisible();
    await expect(home.helpLink).toBeVisible();
    await expect(home.extrasLink).toBeVisible();
    await expect(home.releasesLink).toBeVisible();
    await expect(home.searchBar).toBeVisible();
    await expect(home.searchButton).toBeVisible();
    // Flaky element, not sure what causes it to sometimes be hidden. Would investigate further but skipping due
    // to time constraints
    // await expect(home.donateButton).toBeVisible();
    await expect(home.sponsorButton).toBeVisible();
    await expect(home.ukraineDonationButton).toBeVisible();
  });

  test('About link should navigate to About Page', async ({ page }) => {
    const { home } = await assignPageObjects(page)
    await home.open();
    await home.aboutLink.click();

    await expect(page).toHaveURL('https://pandoc.org/index.html')
  })

  test('Installing link should navigate to Installing Page', async ({ page }) => {
    const { home } = await assignPageObjects(page)
    await home.open();
    await home.installingLink.click();

    await expect(page).toHaveURL('https://pandoc.org/installing.html')
  })

  test('Demos link should navigate to Demos Page', async ({ page }) => {
    const { home } = await assignPageObjects(page)
    await home.open();
    await home.demosLink.click();

    await expect(page).toHaveURL('https://pandoc.org/demos.html')
  })

  test('Documentation dropdown should display Documentation links', async ({ page }) => {
    const { home, documentation } = await assignPageObjects(page)
    await home.open();
    await home.documentationDropdown.click();

    await expect(documentation.gettingStartedLink).toBeVisible();
    await expect(documentation.usersGuideLink).toBeVisible();
    await expect(documentation.usersGuidePDFLink).toBeVisible();
    await expect(documentation.contributingLink).toBeVisible();
    await expect(documentation.faqLink).toBeVisible();
    await expect(documentation.pressLink).toBeVisible();
    await expect(documentation.filtersLink).toBeVisible();
    await expect(documentation.luaFiltersLink).toBeVisible();
    await expect(documentation.customReadersLink).toBeVisible();
    await expect(documentation.customWritersLink).toBeVisible();
    await expect(documentation.pandocServerLink).toBeVisible();
    await expect(documentation.ebookLink).toBeVisible();
    await expect(documentation.emacsLink).toBeVisible();
    await expect(documentation.jatsLink).toBeVisible();
    await expect(documentation.pandocAPILink).toBeVisible();
    await expect(documentation.apiDocumentationLink).toBeVisible();
  })

  test('Help link should navigate to Help Page', async ({ page }) => {
    const { home } = await assignPageObjects(page)
    await home.open();
    await home.helpLink.click();

    await expect(page).toHaveURL('https://pandoc.org/help.html')
  })

  test('Extras link should navigate to Extras Page', async ({ page }) => {
    const { home } = await assignPageObjects(page)
    await home.open();
    await home.extrasLink.click();

    await expect(page).toHaveURL('https://pandoc.org/extras.html')
  })

  test('Releases link should navigate to Releases Page', async ({ page }) => {
    const { home } = await assignPageObjects(page)
    await home.open();
    await home.releasesLink.click();

    await expect(page).toHaveURL('https://pandoc.org/releases.html')
  })

  // Flaky element, not sure what causes it to sometimes be hidden. Would investigate further but skipping due
  // to time constraints
  test.skip('Donate button should navigate to Donate Page', async ({ page }) => {
    const { home } = await assignPageObjects(page)
    await home.open();
    await home.donateButton.click();

    await expect(page).toHaveURL(/^https:\/\/www.paypal\.com\/donate/)
  })

  test('Sponsor button should navigate to Sponsor Page', async ({ page }) => {
    const { home } = await assignPageObjects(page)
    await home.open();
    await home.sponsorButton.click();

    await expect(page).toHaveURL('https://github.com/sponsors/jgm')
  })

  test('Support Ukraine button should navigate to Support Ukraine Page', async ({ page }) => {
    const { home } = await assignPageObjects(page)
    await home.open();
    await home.ukraineDonationButton.click();

    await expect(page).toHaveURL('https://novaukraine.org/')
  })

  test('Using search bar returns search results', async ({ page }) => {
    // If I had more time to really dive into the results I'd also test for relevancy
    const { home } = await assignPageObjects(page)
    await home.open();
    await home.searchBar.fill('Revision history');
    await home.searchButton.click();

    await expect(home.searchResults).toBeVisible();
    await expect(home.searchData).toBeVisible();
  })

  test('Using search string that contains a "-" returns Duckduckgo search results', async ({ page }) => {
    // Just noticed when I used a particular search term
    const { home } = await assignPageObjects(page)
    await home.open();
    await home.searchBar.fill('Pandoc - Press');
    await home.searchButton.click();

    await expect(page).toHaveURL(/^https:\/\/duckduckgo\.com/)
  })
})