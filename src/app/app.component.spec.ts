import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { MemberListModule } from './member-list/member-list.module';
import { MemberViewModule } from './member-view/member-view.module';
import { PlaneListModule } from './plane-list/plane-list.module';
import { SiteNavigationModule } from './site-navigation/site-navigation.module';
import { CreditListModule } from './credit-list/credit-list.module';
import { AddPlaneDialogModule } from './plane-list/add-plane-dialog/add-plane-dialog.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppRoutingModule,
        MemberListModule,
        MemberViewModule,
        PlaneListModule,
        SiteNavigationModule,
        CreditListModule,
        AddPlaneDialogModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: Router, useClass: AppRoutingModule }
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
