import { SiteNavigationModule } from './site-navigation.module';

describe('SiteNavigationModule', () => {
  let SiteNavigation: SiteNavigationModule;

  beforeEach(() => {
    SiteNavigation = new SiteNavigationModule();
  });

  it('should create an instance', () => {
    expect(SiteNavigationModule).toBeTruthy();
  });
});
