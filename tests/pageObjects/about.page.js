import Page from "./page";

export default class AboutPage extends Page {
  diagram = this.page.locator('#diagram')
  // These are not selectors I would normally use and would immediately file a ticket for a data-test-id label
  intro = this.page.locator('body > div > main > p:nth-child(1)')
  formatList = this.page.locator('body > div > main > div')

  async open() {
    await this.goToUrl('https://pandoc.org/index.html');
  }
}