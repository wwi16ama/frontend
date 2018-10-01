import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Plane } from './../models/plane.model';

@Injectable()
export class PlaneListService {

  constructor(public httpClient: HttpClient) { }

  public getPlaneListData(): Observable<Plane[]>  {
    return this.httpClient.get<Plane[]>('http://localhost:4200/assets/mock-data/plane.json');
  }
}
