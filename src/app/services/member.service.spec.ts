import { TestBed, getTestBed } from '@angular/core/testing';

import { MemberService } from './member.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { Member, Address, Status, Authorization } from './../models/member.model';

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

    it('should trigger get request', () => {
      const testMemberData = new Member(
        0, 'Peter', 'Zwegat', '2018-09-10T13:15:19.927+0000', 'Männlich', Status.active,
        'peter.zwegat@gmx.de', new Address(
          12345, 'Dorfstraße 2', 'Mannheim', 'Baden-Württemberg', 'Deutschland'
        ), 'DE9876543210', true, '56789', ['Vorstand', 'Nicer Dude'],
        [
          new Authorization('PPL-A', '2018-09-10T13:15:19.927+0000'),
          new Authorization('PPL-A', '2018-09-10T13:15:19.927+0000')
        ]
      );
      const id = '0';
      service.getMemberData(id).subscribe(memberData => {
        expect(memberData).toEqual(testMemberData);
      });
      const url = 'http://localhost:4200/assets/mock-data/member' + id + '.json';
      const req = httpMock.expectOne(url);
      expect(req.request.method).toBe('GET');
      req.flush(testMemberData);
    });
  });

});
