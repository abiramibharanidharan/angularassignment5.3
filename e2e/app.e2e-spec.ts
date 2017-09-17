import { AAssignment53Page } from './app.po';

describe('a-assignment53 App', function() {
  let page: AAssignment53Page;

  beforeEach(() => {
    page = new AAssignment53Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
