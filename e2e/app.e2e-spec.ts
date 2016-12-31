import { QandA1Page } from './app.po';

describe('qand-a1 App', function() {
  let page: QandA1Page;

  beforeEach(() => {
    page = new QandA1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
