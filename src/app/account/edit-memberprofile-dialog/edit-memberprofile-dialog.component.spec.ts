import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMemberProfileDialogComponent } from './edit-memberprofile-dialog.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
  MatDialogModule, MatInputModule, MatButtonModule, MatExpansionModule, MatTabsModule,
  MatDatepickerModule, MatNativeDateModule, MatSelectModule, MatCheckboxModule,
  MatSnackBarModule, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar
} from '@angular/material';

import { SharedDirectivesModule } from './../../directives/shared-directives.module';
import { Member, Office, OfficeEnum, Authorization, AuthorizationEnum, Gender, Status, Address } from './../../models/member.model';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('EditMemberProfileDialogComponent', () => {
  let component: EditMemberProfileDialogComponent;
  let fixture: ComponentFixture<EditMemberProfileDialogComponent>;
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
      declarations: [EditMemberProfileDialogComponent],
      imports: [
        SharedDirectivesModule,
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
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: member },
        { provide: MatSnackBar, useValue: {} },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMemberProfileDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
