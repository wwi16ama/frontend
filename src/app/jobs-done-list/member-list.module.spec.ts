import { JobsDoneListModule } from './jobs-done-list.module';

describe('JobsDoneListModule', () => {
  let jobsDoneListModule: JobsDoneListModule;

  beforeEach(() => {
    jobsDoneListModule = new JobsDoneListModule();
  });

  it('should create an instance', () => {
    expect(JobsDoneListModule).toBeTruthy();
  });
});
