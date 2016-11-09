import { MiPeliculasAngularPage } from './app.po';

describe('mi-peliculas-angular App', function() {
  let page: MiPeliculasAngularPage;

  beforeEach(() => {
    page = new MiPeliculasAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
