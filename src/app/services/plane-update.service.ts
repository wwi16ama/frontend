import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Plane } from './../models/plane.model';

@Injectable()
export class PlaneUpdateService {

  constructor(public httpClient: HttpClient) { }

  public updatePlaneData(planeData: Plane): Observable<any> {
    const id = planeData.id;
    const url = 'http://localhost:3000/plane/' + id;
    delete planeData['id'];
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.put<any>(
      url,
      planeData,
      {
        headers: headers,
        observe: 'response'
      }
    );
  }
}
