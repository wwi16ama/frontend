import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Plane } from './../models/plane.model';
import { environment } from '../../environments/environment';

@Injectable()
export class PlaneService {

  constructor(public httpClient: HttpClient) { }

  public getPlaneListData(): Observable<Plane[]>  {
    return this.httpClient.get<Plane[]>(environment.baseUrl + '/planes');
  }
}
