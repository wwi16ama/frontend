import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensingBillListComponent } from './expensing-bill-list.component';
import {MatTableModule, MatButtonModule, MatSortModule } from '@angular/material';
import {PlaneListService} from './../services/planelist.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ExpensingBillListComponent', () => {
  let component: ExpensingBillListComponent;
  let fixture: ComponentFixture<ExpensingBillListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpensingBillListComponent ],
      imports: [
        MatTableModule, 
        MatButtonModule, 
        MatSortModule, 
        BrowserAnimationsModule, 
        HttpClientModule
      ],
      providers: [
        PlaneListService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensingBillListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
