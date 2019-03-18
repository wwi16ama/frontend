import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { PlaneLog } from './../models/planelog.model';
import { environment } from '../../environments/environment';

@Injectable()
export class PlaneLogService {

  constructor(public httpClient: HttpClient) { }

  public getPlaneListData(): Observable<PlaneLog[]>  {
    return this.httpClient.get<PlaneLog[]>(environment.baseUrl + '/planelog');
  }

  public addPlaneData(PlaneLogs: PlaneLog): Observable<any> {
    const url = environment.baseUrl + '/planelog/';
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post<PlaneLog>(
      url,
      PlaneLog,
      {
        headers: headers,
        observe: 'response'
      }
    );
  }

}
