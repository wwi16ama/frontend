import { TestBed } from '@angular/core/testing';

import { JobsdonelistService } from './jobsdonelist.service';

describe('JobsdonelistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JobsdonelistService = TestBed.get(JobsdonelistService);
    expect(service).toBeTruthy();
  });
});
