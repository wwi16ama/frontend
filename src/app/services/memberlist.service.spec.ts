import { TestBed, getTestBed } from '@angular/core/testing';

import { MemberListService } from './memberlist.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../environments/environment';

import { ListMember } from './../models/list-member.model';

describe('MemberlistService', () => {

  let injector: TestBed;
  let service: MemberListService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        MemberListService
      ]
    });
    injector = getTestBed();
    service = injector.get(MemberListService);
    httpMock = injector.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should trigger get request', () => {
    const testMemberListData = [
      new ListMember(0, 'Peter', 'Zwegat'),
      new ListMember(1, 'Max', 'Mustermann')
    ];
    service.getMemberListData().subscribe(memberListData => {
      expect(memberListData).toEqual(testMemberListData);
    });
    const req = httpMock.expectOne(environment.baseUrl + '/members');
    expect(req.request.method).toBe('GET');
    req.flush(testMemberListData);
  });
});
