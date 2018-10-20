import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteNavigationComponent } from './site-navigation.component';

describe('SiteNavigation', () => {
  let component: SiteNavigationComponent;
  let fixture: ComponentFixture<SiteNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
