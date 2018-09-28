import { TestBed, getTestBed } from '@angular/core/testing';

import { MemberUpdateService } from './member-update.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { Member, Gender, Address, Status, Authorization, AuthorizationEnum, Office, OfficeEnum } from './../models/member.model';


describe('MemberService', () => {

  let injector: TestBed;
  let service: MemberUpdateService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        MemberUpdateService
      ]
    });
    injector = getTestBed();
    service = injector.get(MemberUpdateService);
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
      expect(service.updateMemberData).toBeDefined();
    });
  });

});

