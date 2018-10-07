import { TestBed } from '@angular/core/testing';

import { PlaneListService } from './planelist.service';

describe('PlanelistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlaneListService = TestBed.get(PlaneListService);
    expect(service).toBeTruthy();
  });
});
