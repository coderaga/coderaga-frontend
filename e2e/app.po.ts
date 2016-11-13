import { browser, element, by } from 'protractor';

export class CoderagaFrontendPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('cr-root h1')).getText();
  }
}
