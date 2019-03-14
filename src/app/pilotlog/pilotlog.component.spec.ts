import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotLogComponent } from './pilotlog.component';

import { MatButtonModule, MatTableModule, MatSortModule } from '@angular/material';

describe('PilotLogComponent', () => {
  let component: PilotLogComponent;
  let fixture: ComponentFixture<PilotLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatTableModule,
        MatSortModule,
        MatButtonModule
      ],
      declarations: [ PilotLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PilotLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
