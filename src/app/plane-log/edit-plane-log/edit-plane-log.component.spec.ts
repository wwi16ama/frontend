import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPlaneLogComponent } from './edit-plane-log.component';

describe('EditPlaneLogComponent', () => {
  let component: EditPlaneLogComponent;
  let fixture: ComponentFixture<EditPlaneLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPlaneLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPlaneLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
