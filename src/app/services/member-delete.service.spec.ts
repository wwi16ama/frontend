import { TestBed } from '@angular/core/testing';

import { MemberDeleteService } from './member-delete.service';

describe('MemberDeleteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MemberDeleteService = TestBed.get(MemberDeleteService);
    expect(service).toBeTruthy();
  });
});
