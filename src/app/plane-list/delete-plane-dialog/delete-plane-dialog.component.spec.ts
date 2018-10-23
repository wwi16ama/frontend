import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePlaneDialogComponent } from './delete-plane-dialog.component';

describe('DeletePlaneDialogComponent', () => {
  let component: DeletePlaneDialogComponent;
  let fixture: ComponentFixture<DeletePlaneDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletePlaneDialogComponent ]
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
