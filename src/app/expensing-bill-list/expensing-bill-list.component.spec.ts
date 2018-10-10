import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensingBillListComponent } from './expensing-bill-list.component';
import {MatTableModule, MatButtonModule } from '@angular/material';

describe('ExpensingBillListComponent', () => {
  let component: ExpensingBillListComponent;
  let fixture: ComponentFixture<ExpensingBillListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpensingBillListComponent ],
      imports: [MatTableModule, MatButtonModule]
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
