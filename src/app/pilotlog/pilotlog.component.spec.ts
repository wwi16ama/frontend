import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotLogComponent } from './pilotlog.component';
import { PilotlogService } from './../services/pilotlog.service';
import { MatDialog, MatDialogModule, MatButtonModule, MatTableModule, MatSortModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

describe('PilotLogComponent', () => {
  let component: PilotLogComponent;
  let fixture: ComponentFixture<PilotLogComponent>;

describe('PilotLogbookComponent', () => {
  let component: PilotLogbookComponent;
  let fixture: ComponentFixture<PilotLogbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatTableModule,
        MatSortModule,
        MatButtonModule,
        MatDialogModule,
        MatDialog,
        HttpClientModule
      ],
      declarations: [ 
        PilotLogComponent 
      ],
      providers: [
        PilotlogService,
        { provide: MatDialog, useValue: {} }
      ]
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
