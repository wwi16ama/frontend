import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMemberDialogComponent } from './edit-member-dialog.component';
import { Member, Office, OfficeEnum, Authorization, AuthorizationEnum, Gender, Status, Address } from './../../models/member.model';

import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar,
  MatDialogModule, MatInputModule, MatButtonModule,
  MatExpansionModule, MatTabsModule, MatDatepickerModule,
  MatNativeDateModule, MatSelectModule, MatCheckboxModule,
  MatSnackBarModule
} from '@angular/material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('EditMemberDialogComponent', () => {
  let component: EditMemberDialogComponent;
  let fixture: ComponentFixture<EditMemberDialogComponent>;

  const member = new Member(
    'Peter', 'Zwegat', '1998-10-10', Gender.MALE,
    Status.ACTIVE, 'peter.zwegat@gmx.de',
    new Address(
      12345, 'Dorfstraße 2', 'Mannheim',
    ),
    'DE9876543210',
    true, [new Office(OfficeEnum.FLUGWART), new Office(OfficeEnum.IMBETRIEBSKONTROLLTURMARBEITEND)],
    [
      new Authorization(AuthorizationEnum.PPLA, '1998-10-10', '1998-10-10'),
      new Authorization(AuthorizationEnum.PPLA, '1998-10-10', '1998-10-10')
    ], 56789
  );

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
      declarations: [EditMemberDialogComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: member },
        { provide: MatSnackBar, useValue: {} },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMemberDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
