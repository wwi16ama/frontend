import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlaneLogComponent } from './add-plane-log.component';

describe('AddPlaneLogComponent', () => {
  let component: AddPlaneLogComponent;
  let fixture: ComponentFixture<AddPlaneLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPlaneLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPlaneLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
