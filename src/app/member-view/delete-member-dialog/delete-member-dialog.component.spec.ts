import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MatDialogRef, MAT_DIALOG_DATA, MatButtonModule, MatDialogModule
} from '@angular/material';

import { Member, Office, OfficeEnum, Authorization, AuthorizationEnum, Gender, Status, Address } from './../../models/member.model';

import { DeleteMemberDialogComponent } from './delete-member-dialog.component';

describe('DeleteMemberDialogComponent', () => {
  let component: DeleteMemberDialogComponent;
  let fixture: ComponentFixture<DeleteMemberDialogComponent>;
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
        MatButtonModule,
        MatDialogModule
      ],
      declarations: [DeleteMemberDialogComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: member }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteMemberDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
