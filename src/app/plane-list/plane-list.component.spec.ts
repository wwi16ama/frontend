import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaneListComponent } from './plane-list.component';
import { MatCardModule, MatButtonModule, MatIconModule} from '@angular/material';

describe('PlaneListComponent', () => {
  let component: PlaneListComponent;
  let fixture: ComponentFixture<PlaneListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaneListComponent ],
      imports: [ MatIconModule, MatCardModule, MatButtonModule ]
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
