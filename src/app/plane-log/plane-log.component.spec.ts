import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaneLogComponent } from './plane-log.component';

describe('PlaneLogComponent', () => {
  let component: PlaneLogComponent;
  let fixture: ComponentFixture<PlaneLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaneLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaneLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
