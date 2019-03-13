import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

import { Member } from './../models/member.model';
import { ListMember } from './../models/list-member.model';

import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';


@Injectable()
export class MemberService {

  constructor(public httpClient: HttpClient, public authService: AuthService) { }

  public getMemberData(id): Observable<Member>  {
    const url = environment.baseUrl + '/members/' + id;
    const headers = this.authService.setAuthHeader();
    return this.httpClient.get<Member>(
      url,
      {
        headers: headers
      }
    );
  }

  public getMemberListData(): Observable<ListMember[]>  {
    const url = environment.baseUrl + '/members';
    const headers = this.authService.setAuthHeader();
    return this.httpClient.get<ListMember[]>(
      url,
      {
        headers: headers
      }
    );
  }

  public deleteMemberData (memberId: number): Observable <any> {
    const url = environment.baseUrl + '/members/' + memberId;
    const headers = this.authService.setAuthHeader();
    return this.httpClient.delete<any>(
      url,
      {
        headers: headers,
        observe: 'response'
      });
  }

  public updateMemberData(memberData: Member): Observable<any> {
    const id = memberData.id;
    const url = environment.baseUrl + '/members/' + id;
    delete memberData['id'];
    const headers = this.authService.setAuthHeader();
    return this.httpClient.put<any>(
      url,
      memberData,
      {
        headers: headers,
        observe: 'response'
      }
    );
  }

  public addMemberData(memberData: Member): Observable<any> {
    const url = environment.baseUrl + '/members';
    const headers = this.authService.setAuthHeader();
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
