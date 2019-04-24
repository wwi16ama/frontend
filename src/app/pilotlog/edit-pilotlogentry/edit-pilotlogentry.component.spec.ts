import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPilotlogentryComponent } from './edit-pilotlogentry.component';

describe('EditPilotlogentryComponent', () => {
  let component: EditPilotlogentryComponent;
  let fixture: ComponentFixture<EditPilotlogentryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPilotlogentryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPilotlogentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
