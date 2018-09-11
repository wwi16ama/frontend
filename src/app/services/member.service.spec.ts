import { TestBed } from '@angular/core/testing';

import { MemberService } from './member.service';
import { HttpClientModule } from '@angular/common/http';

describe('MemberService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: MemberService = TestBed.get(MemberService);
    expect(service).toBeTruthy();
  });
});
