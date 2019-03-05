import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMemberProfileDialogComponent } from './edit-memberprofile-dialog.component';

describe('EditMemberProfileDialogComponent', () => {
  let component: EditMemberProfileDialogComponent;
  let fixture: ComponentFixture<EditMemberProfileDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMemberProfileDialogComponent ]
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
