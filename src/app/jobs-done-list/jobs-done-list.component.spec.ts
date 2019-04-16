import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsDoneListComponent } from './jobs-done-list.component';

describe('JobsDoneListComponent', () => {
  let component: JobsDoneListComponent;
  let fixture: ComponentFixture<JobsDoneListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobsDoneListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsDoneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
