import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { JobsDoneList } from './../models/jobsdonelist.model';
import { environment } from '../../environments/environment';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class JobsdonelistService {

  constructor(public httpClient: HttpClient, public authService: AuthService) { }

  public getJobsDoneListData(id): Observable<JobsDoneList[]>  {
    const url = environment.baseUrl + '/services/' + id;
    const headers = this.authService.setAuthHeader();
    return this.httpClient.get<JobsDoneList[]>(
      url,
      {
        headers: headers
      }
    );
  }

  public getServiceSum(id): number {
    var jobs: JobsDoneList[];
    var sum = 0;
    this.getJobsDoneListData(id).subscribe(
      (jobsdata: JobsDoneList[]) => {
        jobs = jobsdata;
        for (let i = 0; i < jobs.length; i++) {
          sum += jobs[i].gutschrift;
        }
      }
    );

    return sum;
  }

}
