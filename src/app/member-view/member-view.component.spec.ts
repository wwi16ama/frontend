import { of } from 'rxjs';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberViewComponent } from './member-view.component';
import { MemberService } from './../services/member.service';
import { MemberUpdateService } from './../services/member-update.service';
import {
  MatDividerModule, MatListModule, MatCheckboxModule,
  MatButtonModule, MatSelectModule, MatInputModule, MatSnackBarModule
} from '@angular/material';
import { MatDialog, MatSnackBar } from '@angular/material';

import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Member, Gender, Address, Authorization, AuthorizationEnum, Status, Office, OfficeEnum } from './../models/member.model';
describe('MemberViewComponent', () => {
  let component: MemberViewComponent;
  let fixture: ComponentFixture<MemberViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatDividerModule,
        MatListModule,
        MatCheckboxModule,
        MatButtonModule,
        MatSelectModule,
        MatInputModule,
        MatSnackBarModule,
        HttpClientModule
      ],
      declarations: [MemberViewComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of([{ id: '0' }]),
          },
        },
        { provide: MatDialog, useValue: {} },
        { provide: MatSnackBar, useValue: {} },
        MemberService,
        MemberUpdateService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should define the method', () => {
      expect(component.ngOnInit).toBeDefined();
    });

    it('should define ', () => {
      const testMember = new Member(
        'Peter', 'Zwegat', '1998-10-10', Gender.MALE,
        Status.ACTIVE, 'peter.zwegat@gmx.de',
        new Address(
          12345, 'Dorfstraße 2', 'Mannheim',
        ),
        'DE9876543210',
        true, '56789', [new Office(OfficeEnum.FLUGWART), new Office(OfficeEnum.IMBETRIEBSKONTROLLTURMARBEITEND)],
        [
          new Authorization(AuthorizationEnum.PPLA, '1998-10-10', '1998-10-10'),
          new Authorization(AuthorizationEnum.PPLA, '1998-10-10', '1998-10-10')
        ], 0
      );
      spyOn(component.memberService, 'getMemberData').and.returnValue(of(testMember));
      component.ngOnInit();
      testMember.status = Status[testMember.status];
      expect(component.member).toEqual(testMember);
    });
  });

});
