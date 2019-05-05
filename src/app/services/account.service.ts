import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Account, AddTransaction, Transaction } from './../models/account.model';
import { ListAccount } from './../models/list-account.model';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(public httpClient: HttpClient, public authService: AuthService) { }

  public getAccounts(): Observable<ListAccount[]> {
    const url = environment.baseUrl + '/accounts';
    const headers = this.authService.setAuthHeader();
    return this.httpClient.get<ListAccount[]>(
      url,
      {
        headers: headers
      }
    );
  }

  public getAccountVereinskonto(): Observable<Account> {
    const url = environment.baseUrl + '/accounts/vereinskonto';
    const headers = this.authService.setAuthHeader();
    return this.httpClient.get<Account>(
      url,
      {
        headers: headers
      }
    );
  }

  public getAccountData(memberBankingAccountId: number): Observable<Account> {
    const url = environment.baseUrl + '/accounts/' + memberBankingAccountId;
    const headers = this.authService.setAuthHeader();
    return this.httpClient.get<Account>(
      url,
      {
        headers: headers
      }
    );
  }

  public addTransaction(transactions: AddTransaction, bankingAccount): Observable<any> {
    const url = environment.baseUrl + '/accounts/' + bankingAccount + '/transactions';
    const headers = this.authService.setAuthHeader();
    return this.httpClient.post<AddTransaction>(
      url,
      transactions,
      {
        headers: headers,
        observe: 'response'
      }
    );
  }

  public addExternalTransaction( externalTransaction: AddTransaction): Observable<any> {
    const url = environment.baseUrl + '/accounts/vereinskonto/transactions';
    const headers = this.authService.setAuthHeader();
    return this.httpClient.post<AddTransaction>(
      url,
      externalTransaction,
      {
        headers: headers,
        observe: 'response'
      }
    );
  }
}
