import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Account } from './../models/account.model';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(public httpClient: HttpClient, public authService: AuthService) { }

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
}
