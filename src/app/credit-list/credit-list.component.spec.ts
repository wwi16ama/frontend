import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTableModule, MatSortModule, MatButtonModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { CreditListComponent } from './credit-list.component';

import { CreditListService } from './../services/creditlist.service';

describe('CreditListComponent', () => {
  let component: CreditListComponent;
  let fixture: ComponentFixture<CreditListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatTableModule,
        MatSortModule,
        MatButtonModule,
        HttpClientModule,
        RouterTestingModule.withRoutes([])
      ],
      declarations: [ CreditListComponent ],
      providers: [
        CreditListService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
