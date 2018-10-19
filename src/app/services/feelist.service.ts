import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { ListFee } from '../models/list-fee.model';


@Injectable({
  providedIn: 'root'
})
export class FeeListService {

  constructor(public httpClient: HttpClient) { }

  public getFeeListData(): Observable<ListFee[]>  {
    return this.httpClient.get<ListFee[]>('http://localhost:4200/assets/mock-data/feelist.json');
  }
}
