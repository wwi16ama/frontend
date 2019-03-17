import { TestBed } from '@angular/core/testing';

import { PlanelogService } from './planelog.service';

describe('PlanelogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlanelogService = TestBed.get(PlanelogService);
    expect(service).toBeTruthy();
  });
});
