import { EditPlaneDialogModule } from './edit-plane-dialog.module';

describe('EditMemberDialogModule', () => {
  let editPlaneDialogModule: EditPlaneDialogModule;

  beforeEach(() => {
    editPlaneDialogModule = new EditPlaneDialogModule();
  });

  it('should create an instance', () => {
    expect(editPlaneDialogModule).toBeTruthy();
  });
});
