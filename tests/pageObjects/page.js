export default class Page {
  constructor(page) {
    this.page = page
  }

  async goToUrl(url) {
    await this.page.goto(url)
  }
}