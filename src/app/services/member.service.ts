import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Member } from './../models/member.model';
import { environment } from '../../environments/environment';

@Injectable()
export class MemberService {

  constructor(public httpClient: HttpClient) { }

  public getMemberData(id): Observable<Member>  {
    const url = environment.baseUrl + '/members/' + id;
    return this.httpClient.get<Member>(url);
  }
}
