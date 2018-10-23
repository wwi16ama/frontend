import { FeeListModule } from './fee-list.module';

describe('FeeListModule', () => {
  let feeListModule: FeeListModule;

  beforeEach(() => {
    feeListModule = new FeeListModule();
  });

  it('should create an instance', () => {
    expect(feeListModule).toBeTruthy();
  });
});
