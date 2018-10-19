import { TestBed } from '@angular/core/testing';

import { FeeListService } from './feelist.service';

describe('FeeListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FeeListService = TestBed.get(FeeListService);
    expect(service).toBeTruthy();
  });
});
