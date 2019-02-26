import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { ListCredit } from './../models/list-credit.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CreditListService {

  constructor(public httpClient: HttpClient) { }

  public getCreditListData(): Observable<ListCredit[]> {
    return this.httpClient.get<ListCredit[]>(environment.baseUrl + '/credits');
  }
}
