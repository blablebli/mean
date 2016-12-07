import { SocketioAngular2ClientePage } from './app.po';

describe('socketio-angular2-cliente App', function() {
  let page: SocketioAngular2ClientePage;

  beforeEach(() => {
    page = new SocketioAngular2ClientePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
