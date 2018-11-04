import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { ListFee } from '../models/list-fee.model';
import { environment } from './../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FeeListService {

  constructor(public httpClient: HttpClient) { }

  public getFeeListData(): Observable<ListFee[]>  {
    return this.httpClient.get<ListFee[]>(environment.baseUrl + '/fees');
  }
}
