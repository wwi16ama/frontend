import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { ListShare } from './../models/list-share.model';


@Injectable({
  providedIn: 'root'
})
export class ShareListService {

  constructor(public httpClient: HttpClient) { }

  public getShareListData(): Observable<ListShare[]>  {
    return this.httpClient.get<ListShare[]>('http://localhost:4200/assets/mock-data/sharelist.json');
  }
}
