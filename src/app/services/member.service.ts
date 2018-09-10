import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Member } from './../models/member.model';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(public httpClient: HttpClient) { }

  public getMemberData(): Observable<Member>  {
    return this.httpClient.get<Member>('http://localhost:4200/assets/mock-data/member.json');
  }
}
