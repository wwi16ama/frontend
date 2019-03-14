import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotLogbookComponent } from './pilot-logbook.component';

import { MatTableModule, MatSortModule } from '@angular/material';

describe('PilotLogbookComponent', () => {
  let component: PilotLogbookComponent;
  let fixture: ComponentFixture<PilotLogbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatTableModule,
        MatSortModule
      ],
      declarations: [ PilotLogbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PilotLogbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
