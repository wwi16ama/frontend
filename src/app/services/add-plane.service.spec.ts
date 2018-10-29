import { TestBed } from '@angular/core/testing';

import { AddPlaneService } from './add-plane.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environments/environment';

describe('AddPlaneService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule, HttpTestingController, Observable, environment]
  }));

  it('should be created', () => {
    const service: AddPlaneService = TestBed.get(AddPlaneService);
    expect(service).toBeTruthy();
  });
});
