import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Member } from './../models/member.model';
import { JobsDoneList } from './../models/jobsdonelist.model';
import { MemberService } from './../services/member.service';
import { JobsdonelistService } from './../services/jobsdonelist.service';
import { AuthService } from './../services/auth.service';
import { MatTableDataSource, MatPaginator, MatSort} from '@angular/material';

export interface PeriodicElement {
  startdate: string;
  enddate: string;
  job: string;
  credit: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {startdate: '01.01.2019', enddate: '01.01.2020', job: 'Kassierer', credit: 30},
  {startdate: '02.01.2019', enddate: '01.01.2020', job: 'Kassierer', credit: 30},
  {startdate: '03.01.2019', enddate: '01.01.2020', job: 'Kassierer', credit: 30},
  {startdate: '04.01.2019', enddate: '01.01.2020', job: 'Kassierer', credit: 30},
  {startdate: '06.01.2019', enddate: '01.01.2020', job: 'Kassierer', credit: 30},
  {startdate: '05.01.2019', enddate: '01.01.2020', job: 'Kassierer', credit: 30},
  {startdate: '07.01.2019', enddate: '01.01.2020', job: 'Kassierer', credit: 30},
  {startdate: '09.01.2019', enddate: '01.01.2020', job: 'Kassierer', credit: 30},
  {startdate: '08.01.2019', enddate: '01.01.2020', job: 'Kassierer', credit: 30},
  {startdate: '10.01.2019', enddate: '01.01.2020', job: 'Kassierer', credit: 30},
  {startdate: '10.01.2018', enddate: '31.12.2018', job: 'Kassierer', credit: 30},
  {startdate: '10.01.2018', enddate: '31.12.2018', job: 'Kassierer', credit: 30},
  {startdate: '10.01.2018', enddate: '31.12.2018', job: 'Kassierer', credit: 30},
  {startdate: '10.01.2018', enddate: '31.12.2018', job: 'Kassierer', credit: 30},
  {startdate: '10.01.2018', enddate: '31.12.2018', job: 'Kassierer', credit: 30},
];

@Component({
  selector: 'app-jobs-done-list',
  templateUrl: './jobs-done-list.component.html',
  styleUrls: ['./jobs-done-list.component.css']
})
export class JobsDoneListComponent implements OnInit {
  private sub: any;
  id: number;
  member: Member;
  dataSource: any;
  sort: any;


  displayedColumns: string[];

//  @ViewChild(MatSort) set content(sort: ElementRef) {
//    this.sort = sort;
//    if (this.sort) {
//      this.dataSource.sort = this.sort;
//    }
//  }

  constructor(public authService: AuthService, public memberService: MemberService, public jobsdonelistService: JobsdonelistService, private route: ActivatedRoute) { 
    this.sub = this.route.params.subscribe(params => {
    this.id = +params['id']; // (+) converts string 'id' to a number
    });
    this.displayedColumns = ['startDate', 'endDate', 'name', 'gutschrift']; }

  ngOnInit() {
    this.memberService.getMemberData(this.id).subscribe(
      (memberdata: Member) => {
        this.member = memberdata;
      }
    );
    this.jobsdonelistService.getJobsDoneListData(this.id).subscribe(
      (data: JobsDoneList[]) => {
        this.dataSource = new MatTableDataSource(data);
      }
    );  
  }

  public getServiceSum(): number {
    var sum = 0;
    ELEMENT_DATA.forEach(element => {
      sum += element.credit;
    });
    return sum;
  }

  public getUsr(): string {
    var erg: any;
      erg = this.member.firstName + ' ' + this.member.lastName + ' (' + this.member.id + ')';
    return erg
  }

}
