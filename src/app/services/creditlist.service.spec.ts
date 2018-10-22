import { TestBed, getTestBed } from '@angular/core/testing';

import { CreditListService } from './creditlist.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ListCredit } from './../models/list-credit.model';

import { environment } from '../../environments/environment';

describe('CreditlistService', () => {

  let injector: TestBed;
  let service: CreditListService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        CreditListService
      ]
    });
    injector = getTestBed();
    service = injector.get(CreditListService);
    httpMock = injector.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should trigger get request', () => {
    const testCreditListData = [
      new ListCredit('Mitglied des Vorstands', '200 €/Jahr'),
      new ListCredit('Fluglehrer', '200 €/Jahr'),
      new ListCredit('Flugwart', '100 €/Jahr'),
      new ListCredit('Betriebsdienst Kontrollturm', '40 €/Tag'),
      new ListCredit('Gastflug', '40 €/Tag')
    ];
    service.getCreditListData().subscribe(creditListData => {
      expect(creditListData).toEqual(testCreditListData);
    });
    const req = httpMock.expectOne(environment.baseUrl + '/creditlist');
    expect(req.request.method).toBe('GET');
    req.flush(testCreditListData);
  });
});
