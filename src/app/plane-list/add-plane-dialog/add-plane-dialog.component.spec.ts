import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlaneDialogComponent } from './add-plane-dialog.component';
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef, MatSnackBar } from '@angular/material';

describe('AddPlaneDialogComponent', () => {
  let component: AddPlaneDialogComponent;
  let fixture: ComponentFixture<AddPlaneDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPlaneDialogComponent ],
      imports: [Component, Validators, FormControl, FormGroupDirective, NgForm,
      ErrorStateMatcher, MatDialogRef, MatSnackBar]
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
