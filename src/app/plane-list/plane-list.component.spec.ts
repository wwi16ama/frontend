import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PlaneListComponent } from './plane-list.component';
import { MatCardModule, MatButtonModule, MatIconModule} from '@angular/material';
import { MatDialog, MatSnackBar } from '@angular/material';
import { PlaneListService } from './../services/planelist.service';
import { PlaneUpdateService } from './../services/plane-update.service';
import { HttpClientModule } from '@angular/common/http';
import { AddPlaneService } from '../services/add-plane.service';


describe('PlaneListComponent', () => {
  let component: PlaneListComponent;
  let fixture: ComponentFixture<PlaneListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaneListComponent ],
      imports: [ MatIconModule, MatCardModule, MatButtonModule, HttpClientModule ],
      providers: [
        PlaneListService,
        PlaneUpdateService,
        AddPlaneService,
        { provide: MatDialog, useValue: {} },
        { provide: MatSnackBar, useValue: {} },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
