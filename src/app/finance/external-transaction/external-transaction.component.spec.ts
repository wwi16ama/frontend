import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalTransactionComponent } from './external-transaction.component';

describe('ExternalTransactionComponent', () => {
  let component: ExternalTransactionComponent;
  let fixture: ComponentFixture<ExternalTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternalTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
