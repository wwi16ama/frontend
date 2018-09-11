import { TestBed } from '@angular/core/testing';

import { MemberListService } from './memberlist.service';
import { HttpClientModule } from '@angular/common/http';

describe('MemberlistService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: MemberListService = TestBed.get(MemberListService);
    expect(service).toBeTruthy();
  });
});
