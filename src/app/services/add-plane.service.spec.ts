import { TestBed } from '@angular/core/testing';

import { AddPlaneService } from './add-plane.service';
import { Injectable } from '@angular/core';
import {Plane} from '../models/plane.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

describe('AddPlaneService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [Injectable, Plane, HttpClient, HttpHeaders, Observable]
  }));

  it('should be created', () => {
    const service: AddPlaneService = TestBed.get(AddPlaneService);
    expect(service).toBeTruthy();
  });
});
