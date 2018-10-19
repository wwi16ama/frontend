import { TestBed } from '@angular/core/testing';

import { MemberAddService } from './member-add.service';

describe('MemberAddService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MemberAddService = TestBed.get(MemberAddService);
    expect(service).toBeTruthy();
  });
});
