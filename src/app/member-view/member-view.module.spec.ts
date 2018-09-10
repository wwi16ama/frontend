import { MemberViewModule } from './member-view.module';

describe('MemberViewModule', () => {
  let memberViewModule: MemberViewModule;

  beforeEach(() => {
    memberViewModule = new MemberViewModule();
  });

  it('should create an instance', () => {
    expect(memberViewModule).toBeTruthy();
  });
});
