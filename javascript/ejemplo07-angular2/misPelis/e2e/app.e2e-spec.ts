import { MisPelisPage } from './app.po';

describe('mis-pelis App', function() {
  let page: MisPelisPage;

  beforeEach(() => {
    page = new MisPelisPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
