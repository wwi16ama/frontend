import { TestBed, getTestBed } from '@angular/core/testing';

import { PlaneListService } from './planelist.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { Plane, neededAuthorizationEnum } from './../models/plane.model';

describe('MemberlistService', () => {

  let injector: TestBed;
  let service: PlaneListService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        PlaneListService
      ]
    });
    injector = getTestBed();
    service = injector.get(PlaneListService);
    httpMock = injector.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should trigger get request', () => {
    const testPlaneListData = [
      new Plane('D-ERFI', 'Diamond DA-40 TDI', 'Halle 1', neededAuthorizationEnum.PPLA, 4.8, 1.6 ,0),
      new Plane('D-EJEK', 'DR 400 Remorquereur', 'Halle 2', neededAuthorizationEnum.BZFII, 6.0, 1.8, 1),
    ];
    service.getPlaneListData().subscribe(planeListData => {
      expect(planeListData).toEqual(testPlaneListData);
    });
    const req = httpMock.expectOne('http://localhost:4200/assets/mock-data/plane.json');
    expect(req.request.method).toBe('GET');
    req.flush(testPlaneListData);
  });
});
