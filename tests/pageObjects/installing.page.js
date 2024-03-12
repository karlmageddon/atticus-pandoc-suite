import Page from "./page";

export default class InstallingPage extends Page {
  installButton = this.page.locator('#downloadInstallerBtn');

  async open() {
    await this.goToUrl('https://pandoc.org/installing.html');
  }
}