import { of } from 'rxjs';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareListComponent } from './share-list.component';

import { MatTableModule, MatSortModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import { RouterTestingModule } from '@angular/router/testing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ShareListService } from './../services/sharelist.service';
import { ListShare } from './../models/list-share.model';

describe('ShareListComponent', () => {
  let component: ShareListComponent;
  let fixture: ComponentFixture<ShareListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          {component: ShareListComponent },
      ]),
        MatTableModule,
        MatSortModule,
        HttpClientModule,
        BrowserAnimationsModule
      ],
      declarations: [ShareListComponent],
      providers: [
        ShareListService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareListComponent);
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
      const dumyGetShareListData = [
        new ListShare('Aktives Mitglied', 220),
        new ListShare('Aktives Mitglied unter 20 Jahren', 150),
        new ListShare('Passives itglied', 80)
      ];
      spyOn(component.shareListService, 'getShareListData').and.returnValue(of(dumyGetShareListData));
      component.ngOnInit();
      expect(component.shareListService.getShareListData).toHaveBeenCalledTimes(1);
    });

    it('should set dataSource', () => {
      const dumyGetShareListData = [
        new ListShare('Aktives Mitglied', 220),
        new ListShare('Aktives Mitglied unter 20 Jahren', 150),
        new ListShare('Passives itglied', 80)
      ];
      spyOn(component.shareListService, 'getShareListData').and.returnValue(of(dumyGetShareListData));
      component.ngOnInit();
    });
  });
});
