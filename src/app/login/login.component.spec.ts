import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule, MatSnackBarModule, MatInputModule, MatCheckboxModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { LoginService } from './../services/login.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { AppRoutingModule } from './../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        MatButtonModule,
        MatSnackBarModule,
        MatInputModule,
        MatCheckboxModule,
        FormsModule,
        HttpClientTestingModule,
        BrowserAnimationsModule
      ],
      providers: [
        LoginService,
        { provide: Router, useClass: AppRoutingModule },

      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
