import { SocketIoServerPage } from './app.po';

describe('socket-io-server App', function() {
  let page: SocketIoServerPage;

  beforeEach(() => {
    page = new SocketIoServerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
