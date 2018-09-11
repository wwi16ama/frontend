import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Member } from './../models/member.model';

@Injectable()
export class MemberService {

  constructor(public httpClient: HttpClient) { }

  public getMemberData(id): Observable<Member>  {
    const url = 'http://localhost:4200/assets/mock-data/member' + id + '.json';
    return this.httpClient.get<Member>(url);
  }
}
