import { ShareListModule } from './share-list.module';

describe('ShareListModule', () => {
  let shareListModule: ShareListModule;

  beforeEach(() => {
    shareListModule = new ShareListModule();
  });

  it('should create an instance', () => {
    expect(shareListModule).toBeTruthy();
  });
});
