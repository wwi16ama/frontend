import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MemberDeleteService {

  constructor(public httpClient: HttpClient) { }

  public deleteMemberData (memberId: number): Observable <any> {
    const url = environment.baseUrl + '/members/' + memberId;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.delete<any>(
      url,
      {
        headers: headers,
        observe: 'response'
      });
  }
}
