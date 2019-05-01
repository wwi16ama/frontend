import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJobsDialogComponent } from './add-jobs-dialog.component';

describe('AddJobsDialogComponent', () => {
  let component: AddJobsDialogComponent;
  let fixture: ComponentFixture<AddJobsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddJobsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddJobsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
