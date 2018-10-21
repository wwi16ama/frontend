import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlaneDialogComponent } from './add-plane-dialog.component';

describe('AddPlaneDialogComponent', () => {
  let component: AddPlaneDialogComponent;
  let fixture: ComponentFixture<AddPlaneDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPlaneDialogComponent ]
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
