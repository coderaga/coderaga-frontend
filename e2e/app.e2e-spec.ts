import { CoderagaFrontendPage } from './app.po';

describe('coderaga-frontend App', function() {
  let page: CoderagaFrontendPage;

  beforeEach(() => {
    page = new CoderagaFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('cr works!');
  });
});
