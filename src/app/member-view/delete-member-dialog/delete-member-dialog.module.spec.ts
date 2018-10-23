import { DeleteMemberDialogModule } from './delete-member-dialog.module';

describe('DeleteMemberDialogModule', () => {
  let deleteMemberDialogModule: DeleteMemberDialogModule;

  beforeEach(() => {
    deleteMemberDialogModule = new DeleteMemberDialogModule();
  });

  it('should create an instance', () => {
    expect(deleteMemberDialogModule).toBeTruthy();
  });
});
