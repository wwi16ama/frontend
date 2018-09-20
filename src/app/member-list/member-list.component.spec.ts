import { of } from 'rxjs';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberListComponent } from './member-list.component';
import { MemberViewModule } from './../member-view/member-view.module';
import { MatTableModule, MatSortModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import { RouterTestingModule } from '@angular/router/testing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MemberListService } from './../services/memberlist.service';
import { ListMember } from './../models/list-member.model';

describe('MemberListComponent', () => {
  let component: MemberListComponent;
  let fixture: ComponentFixture<MemberListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'member/:id', component: MemberListComponent },
      ]),
        MatTableModule,
        MatSortModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MemberViewModule
      ],
      declarations: [MemberListComponent],
      providers: [
        MemberListService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  describe('Variables', () => {
    it('should define variables', () => {
      expect(component.displayedColumns).toBeDefined();
    });

    it('should define the default values', () => {
      const testDisplayedColumnsArray: string[] = ['id', 'firstName', 'lastName'];
      expect(component.displayedColumns).toEqual(testDisplayedColumnsArray);
    });
  });

  describe('ngOnInit', () => {
    it('should define the method', () => {
      expect(component.ngOnInit).toBeDefined();
    });

    it('should call getMemberListData from memberListService', () => {
      const dumyGetMemberListData = [new ListMember(0, 'Peter', 'Zwegat'), new ListMember(1, 'Max', 'Mustermann')];
      spyOn(component.memberListService, 'getMemberListData').and.returnValue(of(dumyGetMemberListData));
      component.ngOnInit();
      expect(component.memberListService.getMemberListData).toHaveBeenCalledTimes(1);
    });

    it('should set dataSource', () => {
      const dumyGetMemberListData = [new ListMember(0, 'Peter', 'Zwegat'), new ListMember(1, 'Max', 'Mustermann')];
      spyOn(component.memberListService, 'getMemberListData').and.returnValue(of(dumyGetMemberListData));
      component.ngOnInit();
      // expect(component.dataSource).(new MatTableDataSource(dumyGetMemberListData));
    });
  });

  describe('navigateTo', () => {
    it('should define the method', () => {
      expect(component.navigateTo).toBeDefined();
    });

    it('should call router navigate with  parameter', () => {
      const testId = 0;
      const testParams = ['/member', testId];
      spyOn(component.router, 'navigate');
      component.navigateTo(testId);
      expect(component.router.navigate).toHaveBeenCalledWith(testParams);
    });
  });

});
