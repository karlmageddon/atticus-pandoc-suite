// Not technically a page but due to time constraints and for the interest of readability I abstracted it as such

import Page from "./page";

export default class DocumentationDropdownPage extends Page {
  gettingStartedLink = this.page.getByRole('link', { name: 'Getting started', exact: true })
  usersGuideLink = this.page.getByRole('link', { name: 'User\'s Guide', exact: true })
  usersGuidePDFLink = this.page.getByRole('link', { name: 'User\'s Guide (PDF)', exact: true })
  contributingLink = this.page.getByRole('link', { name: 'Contributing', exact: true })
  faqLink = this.page.getByRole('link', { name: 'FAQ', exact: true })
  pressLink = this.page.getByRole('link', { name: 'Press', exact: true })
  filtersLink = this.page.getByRole('link', { name: 'Filters', exact: true })
  luaFiltersLink = this.page.getByRole('link', { name: 'Lua filters', exact: true })
  customReadersLink = this.page.getByRole('link', { name: 'Custom readers', exact: true })
  customWritersLink = this.page.getByRole('link', { name: 'Custom writers', exact: true })
  pandocServerLink = this.page.getByRole('link', { name: 'pandoc-server', exact: true })
  ebookLink = this.page.getByRole('link', { name: 'Making an ebook', exact: true })
  emacsLink = this.page.getByRole('link', { name: 'Emacs Org mode support', exact: true })
  jatsLink = this.page.getByRole('link', { name: 'JATS support', exact: true })
  pandocAPILink = this.page.getByRole('link', { name: 'Using the Pandoc API', exact: true })
  apiDocumentationLink = this.page.getByRole('link', { name: 'API documentation', exact: true })
}