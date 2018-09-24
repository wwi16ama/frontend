import { of } from 'rxjs';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberViewComponent } from './member-view.component';
import { MemberService } from './../services/member.service';
import { MatDividerModule, MatListModule, MatCheckboxModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Member, Gender, Address, Authorization, Status } from './../models/member.model';

describe('MemberViewComponent', () => {
  let component: MemberViewComponent;
  let fixture: ComponentFixture<MemberViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatDividerModule,
        MatListModule,
        MatCheckboxModule,
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
        MemberService
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
        0, 'Peter', 'Zwegat', '2018-09-10T13:15:19.927+0000', Gender.male,
        Status.active, 'peter.zwegat@gmx.de',
        new Address(
          12345, 'Dorfstraße 2', 'Mannheim',
        ),
        'DE9876543210',
        true, '56789', ['Vorstand', 'Nicer Dude'],
        [
          new Authorization('PPL-A', '2018-09-10T13:15:19.927+0000', '2018-09-10T13:15:19.927+0000'),
          new Authorization('PPL-B', '2018-09-10T13:15:19.927+0000', '2018-09-10T13:15:19.927+0000')
        ]
      );
      spyOn(component.memberService, 'getMemberData').and.returnValue(of(testMember));
      component.ngOnInit();
      testMember.status = Status[testMember.status];
      expect(component.member).toEqual(testMember);
    });
  });

});
