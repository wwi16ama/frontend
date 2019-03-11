import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';

import { FeeListService } from './feelist.service';

describe('FeeListService', () => {
  beforeEach(() => TestBed.configureTestingModule({    imports: [
    HttpClientTestingModule
  ],
  providers: [
    FeeListService
  ]}));

  it('should be created', () => {
    const service: FeeListService = TestBed.get(FeeListService);
    expect(service).toBeTruthy();
  });
});
