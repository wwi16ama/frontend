import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MemberService } from './../services/member.service';

import { AccountComponent } from './account.component';

import {
  MatDialog, MatSnackBar, MatButtonModule,
  MatListModule, MatDividerModule, MatTableModule,
  MatSortModule, MatPaginatorModule
} from '@angular/material';

describe('AccountComponent', () => {
  let component: AccountComponent;
  let fixture: ComponentFixture<AccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatListModule,
        MatDividerModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatButtonModule,
        HttpClientTestingModule
      ],
      declarations: [ AccountComponent ],
      providers: [
        MemberService,
        { provide: MatDialog, useValue: {} },
        { provide: MatSnackBar, useValue: {} },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
