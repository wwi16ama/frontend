import { AddUserFormModule } from './add-user-form.module';

describe('AddUserFormModule', () => {
  let addUserFormModule: AddUserFormModule;

  beforeEach(() => {
    addUserFormModule = new AddUserFormModule();
  });

  it('should create an instance', () => {
    expect(addUserFormModule).toBeTruthy();
  });
});
