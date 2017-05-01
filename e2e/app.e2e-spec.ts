import { DecouverteAngular4Page } from './app.po';

describe('decouverte-angular4 App', () => {
  let page: DecouverteAngular4Page;

  beforeEach(() => {
    page = new DecouverteAngular4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
