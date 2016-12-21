import { ProjectjessPage } from './app.po';

describe('projectjess App', function() {
  let page: ProjectjessPage;

  beforeEach(() => {
    page = new ProjectjessPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
