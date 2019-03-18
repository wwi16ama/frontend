import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { PlaneLog } from './../models/planelog.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})export class PlaneLogService {

  constructor(public httpClient: HttpClient) { }

  public getPlaneLogData(): Observable<PlaneLog[]>  {
    return this.httpClient.get<PlaneLog[]>(environment.baseUrl + '/planelog');
  }
}
