import { of } from 'rxjs';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberViewComponent } from './member-view.component';
import { MemberService } from './../services/member.service';
import { MatDividerModule, MatListModule, MatCheckboxModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

describe('MemberViewComponent', () => {
  let component: MemberViewComponent;
  let fixture: ComponentFixture<MemberViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatDividerModule,
        MatListModule,
        MatCheckboxModule,
        HttpClientModule
      ],
      declarations: [MemberViewComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of([{ id: '0' }]),
          },
        },
        MemberService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
