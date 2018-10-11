import { CreditListModule } from './credit-list.module';

describe('CreditListModule', () => {
  let creditListModule: CreditListModule;

  beforeEach(() => {
    creditListModule = new CreditListModule();
  });

  it('should create an instance', () => {
    expect(creditListModule).toBeTruthy();
  });
});
