import { of } from 'rxjs';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeListComponent } from './fee-list.component';

import { MatTableModule, MatSortModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FeeListService } from './../services/feelist.service';
import { ListFee } from '../models/list-fee.model';

describe('FeeListComponent', () => {
  let component: FeeListComponent;
  let fixture: ComponentFixture<FeeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatTableModule,
        MatSortModule,
        HttpClientModule,
        BrowserAnimationsModule
      ],
      declarations: [FeeListComponent],
      providers: [
        FeeListService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeListComponent);
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
      const dumyGetFeeListData = [
        new ListFee('Aktives Mitglied', 220),
        new ListFee('Aktives Mitglied unter 20 Jahren', 150),
        new ListFee('Passives itglied', 80)
      ];
      spyOn(component.feeListService, 'getFeeListData').and.returnValue(of(dumyGetFeeListData));
      component.ngOnInit();
      expect(component.feeListService.getFeeListData).toHaveBeenCalledTimes(1);
    });

    it('should set dataSource', () => {
      const dumyGetFeeListData = [
        new ListFee('Aktives Mitglied', 220),
        new ListFee('Aktives Mitglied unter 20 Jahren', 150),
        new ListFee('Passives itglied', 80)
      ];
      spyOn(component.feeListService, 'getFeeListData').and.returnValue(of(dumyGetFeeListData));
      component.ngOnInit();
    });
  });
});
