import { Ejemplo06EnrutadoPage } from './app.po';

describe('ejemplo06-enrutado App', function() {
  let page: Ejemplo06EnrutadoPage;

  beforeEach(() => {
    page = new Ejemplo06EnrutadoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
