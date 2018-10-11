import { TestBed } from '@angular/core/testing';

import { ShareListService } from './sharelist.service';

describe('ShareListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShareListService = TestBed.get(ShareListService);
    expect(service).toBeTruthy();
  });
});
