import Page from "./page";

export default class HomePage extends Page {
  title = this.page.locator('body > header > span.big')
  subtitle = this.page.locator('body > header > span.small')
  // There don't seem to be any discernible CSS or labels/id's to key off of so I'll be using the link role and text
  // an alternative approach would be to use the 'href' url's but I think this is more readable
  aboutLink = this.page.getByRole('link', { name: 'About', exact: true })
  installingLink = this.page.getByRole('link', { name: 'Installing', exact: true })
  demosLink = this.page.getByRole('link', { name: 'Demos', exact: true })
  documentationDropdown = this.page.locator('#navbarDropdown')
  helpLink = this.page.getByRole('link', { name: 'Help', exact: true })
  extrasLink = this.page.getByRole('link', { name: 'Extras', exact: true })
  releasesLink = this.page.getByRole('link', { name: 'Releases', exact: true })
  searchBar = this.page.locator('#input-search')
  searchButton = this.page.locator('#submit-search')
  searchResults = this.page.locator('#search-results')
  searchData = this.page.locator('#search-results')
  donateButton = this.page.locator('#search-data')
  sponsorButton = this.page.locator('#github-sponsors')
  ukraineDonationButton = this.page.locator('#ukraine')

  async open() {
    await this.goToUrl('https://pandoc.org/');
  }
}