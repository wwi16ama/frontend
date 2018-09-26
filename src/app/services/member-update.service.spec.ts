import { TestBed } from '@angular/core/testing';

import { MemberUpdateService } from './member-update.service';

describe('MemberUpdateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MemberUpdateService = TestBed.get(MemberUpdateService);
    expect(service).toBeTruthy();
  });
});
