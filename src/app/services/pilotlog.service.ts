import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pilotlog } from './../models/pilotlog.model';

@Injectable({
  providedIn: 'root'
})
export class PilotlogService {

  constructor(public httpClient: HttpClient) { }

  public getPilotLogData(memberId): Observable<Pilotlog[]> {
    return this.httpClient.get<Pilotlog[]>(environment.baseUrl + '/pilotlog/' + memberId);
  }
}
