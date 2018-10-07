import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPlaneDialogComponent } from './edit-plane-dialog.component';
import { Plane, neededAuthorizationEnum } from './../../models/plane.model';

import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar,
  MatDialogModule, MatInputModule, MatButtonModule,
  MatExpansionModule, MatTabsModule, MatDatepickerModule,
  MatNativeDateModule, MatSelectModule, MatCheckboxModule,
  MatSnackBarModule
} from '@angular/material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('EditMemberDialogComponent', () => {
  let component: EditPlaneDialogComponent;
  let fixture: ComponentFixture<EditPlaneDialogComponent>;

  const plane = new Plane(0, 'D-ERFI', 'Diamond DA-40 TDI', 'Halle 1', neededAuthorizationEnum.PPLA);


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatDialogModule,
        MatInputModule,
        MatButtonModule,
        MatExpansionModule,
        MatTabsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule,
        MatCheckboxModule,
        MatSnackBarModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
      ],
      declarations: [EditPlaneDialogComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: plane },
        { provide: MatSnackBar, useValue: {} },
      ]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPlaneDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
