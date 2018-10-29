import { Injectable } from '@angular/core';
import {Plane} from '../models/plane.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddPlaneService {

  constructor(public httpClient: HttpClient) { }

    public addPlaneData(planes: Plane): Observable<any> {
    const url = environment.baseUrl + '/planes/';
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
