import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Account } from './../models/account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(public httpClient: HttpClient) { }

  public getAccountData(memberBankingAccountId: number): Observable<Account> {
    return this.httpClient.get<Account>(environment.baseUrl + '/accounts/' + memberBankingAccountId);
  }
}
