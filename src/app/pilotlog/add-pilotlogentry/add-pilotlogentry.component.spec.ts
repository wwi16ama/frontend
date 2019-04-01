import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPilotlogentryComponent } from './add-pilotlogentry.component';
import { MatInputModule, MatDialogRef, MatButtonModule, MatFormFieldModule, MatDatepickerModule, MatDialogModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('AddPilotlogentryComponent', () => {
  let component: AddPilotlogentryComponent;
  let fixture: ComponentFixture<AddPilotlogentryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPilotlogentryComponent ],
      imports: [
        MatDialogModule,
        MatButtonModule,
        MatFormFieldModule,
        MatDialogRef,
        MatDatepickerModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule
      ],
      providers: [
        { provide: MatDialogRef, useValue: {} }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPilotlogentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
