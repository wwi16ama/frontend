import { TestBed } from '@angular/core/testing';

import { MemberlistService } from './memberlist.service';

describe('MemberlistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MemberlistService = TestBed.get(MemberlistService);
    expect(service).toBeTruthy();
  });
});
