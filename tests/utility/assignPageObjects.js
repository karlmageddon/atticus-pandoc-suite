import HomePage from "../pageObjects/home.page";
import DocumentationDropdownPage from "../pageObjects/documentationDropdown.page";
import AboutPage from "../pageObjects/about.page";
import InstallingPage from "../pageObjects/installing.page";
import DemosPage from "../pageObjects/demos.page";

export default function assignPageObjects(page) {
  return {
    home: new HomePage(page),
    documentation: new DocumentationDropdownPage(page),
    about: new AboutPage(page),
    install: new InstallingPage(page),
    demos: new DemosPage(page),
  }
}