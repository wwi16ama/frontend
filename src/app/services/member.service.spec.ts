import { TestBed, getTestBed } from '@angular/core/testing';

import { MemberService } from './member.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../environments/environment';

import { Member, Gender, Address, Status, Authorization, AuthorizationEnum, Office, OfficeEnum } from './../models/member.model';

describe('MemberService', () => {

  let injector: TestBed;
  let service: MemberService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        MemberService
      ]
    });
    injector = getTestBed();
    service = injector.get(MemberService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getMemberData', () => {
    it('should define the method', () => {
      expect(service.getMemberData).toBeDefined();
    });

    it('should trigger get request with correct url', () => {
      const testMemberData = new Member(
        'Peter', 'Zwegat', '1998-10-10', Gender.MALE , Status.ACTIVE,
        'peter.zwegat@gmx.de', new Address(
          12345, 'Dorfstraße 2', 'Mannheim'
        ), 'DE9876543210', true, '56789', [new Office(OfficeEnum.FLUGWART), new Office(OfficeEnum.IMBETRIEBSKONTROLLTURMARBEITEND)],
        [
          new Authorization(AuthorizationEnum.PPLA, '1998-10-10', '1998-10-10'),
          new Authorization(AuthorizationEnum.PPLB, '1998-10-10', '1998-10-10')
        ], 0
      );
      const id = '0';
      service.getMemberData(id).subscribe(memberData => {
        expect(memberData).toEqual(testMemberData);
      });
      const url = environment.baseUrl + '/members/' + id;
      const req = httpMock.expectOne(url);
      expect(req.request.method).toBe('GET');
      req.flush(testMemberData);
    });
  });

});
