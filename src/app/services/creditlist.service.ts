import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { ListCredit } from './../models/list-credit.model';
import { environment } from '../../environments/environment';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CreditListService {

  constructor(public httpClient: HttpClient, public authService: AuthService) { }

  public getCreditListData(): Observable<ListCredit[]> {
    const url = environment.baseUrl + '/credits';
    const headers = this.authService.setAuthHeader();
    return this.httpClient.get<ListCredit[]>(
      url,
      {
        headers: headers
      }
    );
  }
}
