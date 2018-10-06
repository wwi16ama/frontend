import { EditMemberDialogModule } from './edit-member-dialog.module';

describe('EditMemberDialogModule', () => {
  let editMemberDialogModule: EditMemberDialogModule;

  beforeEach(() => {
    editMemberDialogModule = new EditMemberDialogModule();
  });

  it('should create an instance', () => {
    expect(editMemberDialogModule).toBeTruthy();
  });
});
