import { TestBed } from '@angular/core/testing';

import { AddPlaneService } from './add-plane.service';

describe('AddPlaneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddPlaneService = TestBed.get(AddPlaneService);
    expect(service).toBeTruthy();
  });
});
