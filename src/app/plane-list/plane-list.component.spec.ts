import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PlaneListComponent } from './plane-list.component';
import { MatCardModule, MatButtonModule, MatIconModule} from '@angular/material';
import { PlaneListService } from './../services/planelist.service';
import { HttpClientModule } from '@angular/common/http';

describe('PlaneListComponent', () => {
  let component: PlaneListComponent;
  let fixture: ComponentFixture<PlaneListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaneListComponent ],
      imports: [ MatIconModule, MatCardModule, MatButtonModule, HttpClientModule ],
      providers: [ PlaneListService ]
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
