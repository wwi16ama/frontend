import { TestBed, getTestBed } from '@angular/core/testing';

import { ExpensingbillService } from './expensingbill.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ListExpensingBill } from './../models/expensingbilllist.model';
 

describe('ExpensingbillService', () => {
  let injector: TestBed;
  let service: ExpensingbillService;
  let httpMock: HttpTestingController;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ],
    providers: [
      ExpensingbillService
    ]
  }));
  injector = getTestBed();
  service = injector.get(ExpensingbillService);
  httpMock = injector.get(HttpTestingController);

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should trigger get request', () => {
    const testExpensingBillListData = [
      new ListExpensingBill('SF25CFalke', 2.4, 0.65)
    ];
    service.getExpensingBillData().subscribe(ExpensingBillListData => {
      expect(ExpensingBillListData).toEqual(testExpensingBillListData);
    });
    const req = httpMock.expectOne('http://localhost:4200/assets/mock-data/expensingbilllist.json');
    expect(req.request.method).toBe('GET');
    req.flush(testExpensingBillListData);
  });
});
