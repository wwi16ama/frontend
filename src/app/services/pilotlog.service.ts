import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pilotlog } from './../models/pilotlog.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PilotlogService {

  constructor(public httpClient: HttpClient, public authService: AuthService) { }

  public getPilotLogData(memberId): Observable<Pilotlog[]> {
    return this.httpClient.get<Pilotlog[]>(environment.baseUrl + '/pilotlog/' + memberId);
  }

  public addPilotLogEntry(pilotlog:  Pilotlog): Observable<any> {
    const url = environment.baseUrl + '/pilotlog/' + this.authService.getMemberID() +'pilotlogentry';
    const headers = this.authService.setAuthHeader();
    return this.httpClient.post<Pilotlog>(
      url,
      pilotlog,
      {
        headers: headers,
        observe: 'response'
      }
    );
  }
}
