import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlaneDialogComponent } from './add-plane-dialog.component';
import { MatDialogRef, MatTabsModule, MatSnackBarModule, MatSnackBar,  MatButtonModule, MatCheckboxModule, MatFormFieldModule,
  MatInputModule, MatSelectModule, MatStepperModule, MatCardModule, MatTooltipModule,
  MatDatepickerModule, MatNativeDateModule, MatDialogModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


describe('AddPlaneDialogComponent', () => {
  let component: AddPlaneDialogComponent;
  let fixture: ComponentFixture<AddPlaneDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPlaneDialogComponent ],
      imports: [
        MatButtonModule, MatCheckboxModule, MatFormFieldModule,
        MatInputModule, MatSelectModule, MatStepperModule,
        MatCardModule, MatTooltipModule, MatDatepickerModule,
        MatNativeDateModule, MatDialogModule, MatTabsModule,
        FormsModule, ReactiveFormsModule, MatSnackBarModule,
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
    fixture = TestBed.createComponent(AddPlaneDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    });
});
