import { ExpensingBillListModule } from './expensing-bill-list.module';

describe('ExpensingBillListModule', () => {
  let expensingBillListModule: ExpensingBillListModule;

  beforeEach(() => {
    expensingBillListModule = new ExpensingBillListModule();
  });

  it('should create an instance', () => {
    expect(expensingBillListModule).toBeTruthy();
  });
});
