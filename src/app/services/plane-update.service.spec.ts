import { TestBed, getTestBed } from '@angular/core/testing';

import { PlaneUpdateService } from './plane-update.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('MemberService', () => {

  let injector: TestBed;
  let service: PlaneUpdateService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        PlaneUpdateService
      ]
    });
    injector = getTestBed();
    service = injector.get(PlaneUpdateService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('updateMemberData', () => {
    it('should define the method', () => {
      expect(service.updatePlaneData).toBeDefined();
    });
  });

});

