import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Member } from './../models/member.model';

@Injectable()
export class MemberAddService {

  constructor(public httpClient: HttpClient) { }

  public addMemberData(memberData: Member): Observable<any> {
    const url = 'http://localhost:3000/members';
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post<any>(
      url,
      memberData,
      {
        headers: headers,
        observe: 'response'
      }
    );
  }
}
