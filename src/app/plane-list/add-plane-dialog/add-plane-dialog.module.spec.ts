import { AddPlaneDialogModule } from './add-plane-dialog.module';

describe('AddPlaneDialogModule', () => {
  let addPlaneDialogModule: AddPlaneDialogModule;

  beforeEach(() => {
    addPlaneDialogModule = new AddPlaneDialogModule();
  });

  it('should create an instance', () => {
    expect(addPlaneDialogModule).toBeTruthy();
  });
});
