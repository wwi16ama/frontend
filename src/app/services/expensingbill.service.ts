import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { ListExpensingBill } from './../models/expensingbilllist.model';


@Injectable({
  providedIn: 'root'
})
export class ExpensingbillService {

  constructor(public httpClient: HttpClient) { }

  public getExpensingBillData(): Observable<ListExpensingBill[]> {
    return this.httpClient.get<ListExpensingBill[]>('http://localhost:4200/assets/mock-data/expensingbilllist.json');
  }
}
