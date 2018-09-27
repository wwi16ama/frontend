import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Member } from './../models/member.model';

@Injectable()
export class MemberUpdateService {

  constructor(public httpClient: HttpClient) { }

  public updateMemberData(memberData: Member): Observable<{}> {
    const id = memberData.id;
    const url = 'http://localhost:3000/test';
    delete memberData['id'];
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.put<any>(
      url,
      memberData,
      {
        headers: headers,
        observe: 'response'
      }
    );
  }
}
