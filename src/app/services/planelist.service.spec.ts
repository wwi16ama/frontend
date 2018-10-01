import { TestBed } from '@angular/core/testing';

import { PlanelistService } from './planelist.service';

describe('PlanelistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlanelistService = TestBed.get(PlanelistService);
    expect(service).toBeTruthy();
  });
});
