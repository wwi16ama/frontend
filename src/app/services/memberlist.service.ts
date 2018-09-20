import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { ListMember } from './../models/list-member.model';

@Injectable()
export class MemberListService {

  constructor(public httpClient: HttpClient) { }

  public getMemberListData(): Observable<ListMember[]>  {
    return this.httpClient.get<ListMember[]>('http://localhost:4200/assets/mock-data/memberlist.json');
  }
}
