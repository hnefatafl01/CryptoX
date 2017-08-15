import { CryptoXPage } from './app.po';

describe('crypto-x App', () => {
  let page: CryptoXPage;

  beforeEach(() => {
    page = new CryptoXPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
