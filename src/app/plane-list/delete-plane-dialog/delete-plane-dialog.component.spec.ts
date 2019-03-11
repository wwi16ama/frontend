import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule, MatDialogModule, MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { Plane, neededAuthorizationEnum } from './../../models/plane.model';

import { DeletePlaneDialogComponent } from './delete-plane-dialog.component';

describe('DeletePlaneDialogComponent', () => {
  let component: DeletePlaneDialogComponent;
  let fixture: ComponentFixture<DeletePlaneDialogComponent>;
  const plane = new Plane('D-KNIF', 'SF25C Falke', 'Halle 2', neededAuthorizationEnum.BZFI, 6, 1.8, 2);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DeletePlaneDialogComponent],
      imports: [
        MatButtonModule,
        MatDialogModule
      ],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MatSnackBar, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: plane },

      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePlaneDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
