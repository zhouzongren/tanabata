import { TanabataPage } from './app.po';

describe('tanabata App', () => {
  let page: TanabataPage;

  beforeEach(() => {
    page = new TanabataPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
