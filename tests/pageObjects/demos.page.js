import Page from "./page";

export default class DemosPage extends Page {
  demoLink = this.page.locator('#try-pandoc-online > p > a')

  async open() {
    await this.goToUrl('https://pandoc.org/demos.html');
  }
}