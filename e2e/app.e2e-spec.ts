import { AngularBestMoviesEverPage } from './app.po';

describe('angular-tour-of-heroes App', () => {
  let page: AngularBestMoviesEverPage;

  beforeEach(() => {
    page = new AngularBestMoviesEverPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
