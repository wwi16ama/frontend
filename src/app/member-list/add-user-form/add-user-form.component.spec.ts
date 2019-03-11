import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MatButtonModule, MatCheckboxModule, MatFormFieldModule,
  MatInputModule, MatSelectModule, MatStepperModule,
  MatCardModule, MatTooltipModule, MatDatepickerModule,
  MatNativeDateModule, MatDialogModule, MatTabsModule,
  MatDialogRef, MatIconModule, MatSnackBar
} from '@angular/material';
import { SharedDirectivesModule } from './../../directives/shared-directives.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddUserFormComponent } from './add-user-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AddUserFormComponent', () => {
  let component: AddUserFormComponent;
  let fixture: ComponentFixture<AddUserFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUserFormComponent ],
      imports: [
        SharedDirectivesModule,
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatStepperModule,
        MatCardModule,
        MatTooltipModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatDialogModule,
        FormsModule,
        ReactiveFormsModule,
        MatTabsModule,
        MatIconModule,
        BrowserAnimationsModule
      ],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MatSnackBar, useValue: {} },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
