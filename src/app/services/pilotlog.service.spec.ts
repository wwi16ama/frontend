import { TestBed } from '@angular/core/testing';

import { PilotlogService } from './pilotlog.service';

describe('PilotlogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PilotlogService = TestBed.get(PilotlogService);
    expect(service).toBeTruthy();
  });
});
