import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { ListCredit } from './../models/list-credit.model';

@Injectable({
  providedIn: 'root'
})
export class CreditListService {

  constructor(public httpClient: HttpClient) { }

  public getCreditListData(): Observable<ListCredit[]> {
    return this.httpClient.get<ListCredit[]>('http://localhost:4200/assets/mock-data/creditlist.json');
  }
}
