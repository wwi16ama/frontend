import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { ListFee } from '../models/list-fee.model';
import { environment } from './../../environments/environment';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class FeeListService {

  constructor(public httpClient: HttpClient, public authService: AuthService) { }

  public getFeeListData(): Observable<ListFee[]> {
    const url = environment.baseUrl + '/fees';
    const headers = this.authService.setAuthHeader();
    return this.httpClient.get<ListFee[]>(
      url,
      {
        headers: headers
      }
    );
  }
}
