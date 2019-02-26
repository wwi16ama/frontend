import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Plane } from './../models/plane.model';
import { environment } from '../../environments/environment';

@Injectable()
export class PlaneService {

  constructor(public httpClient: HttpClient) { }

  public getPlaneListData(): Observable<Plane[]>  {
    return this.httpClient.get<Plane[]>(environment.baseUrl + '/planes');
  }

  public updatePlaneData(planeData: Plane): Observable<any> {
    const id = planeData.id;
    const url = environment.baseUrl + '/planes/' + id;
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

  public deletePlaneData (planeId: number): Observable <any> {
    const url = environment.baseUrl + '/planes/' + planeId;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.delete<any>(
      url,
      {
        headers: headers,
        observe: 'response'
      });
  }

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
