import { Injectable } from '@angular/core';
import {Plane} from '../models/plane.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AddPlaneService {

  constructor(public httpClient: HttpClient) { }

    public addPlaneData(planes: Plane): Observable<any> {
    const url = 'http://localhost:3000/planes/';
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post<Plane>(
      url,
      planes,
      {
        headers: headers,
        observe: 'response'
      }
    );
  }
}
