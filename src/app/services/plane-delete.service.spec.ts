import { TestBed } from '@angular/core/testing';

import { PlaneDeleteService } from './plane-delete.service';

describe('DeletePlaneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlaneDeleteService = TestBed.get(PlaneDeleteService);
    expect(service).toBeTruthy();
  });
});
