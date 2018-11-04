import { DeletePlaneDialogModule } from './delete-plane-dialog.module';

describe('DeletePlaneDialogModule', () => {
  let deletePlaneDialogModule: DeletePlaneDialogModule;

  beforeEach(() => {
    deletePlaneDialogModule = new DeletePlaneDialogModule();
  });

  it('should create an instance', () => {
    expect(deletePlaneDialogModule).toBeTruthy();
  });
});
