import { Component, OnInit, ViewChild } from '@angular/core';
import { Member } from './../models/member.model';
import { MemberService } from './../services/member.service';
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

  member: Member;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  constructor(public authService: AuthService, public memberService: MemberService,) { 
    
    this.displayedColumns = ['startdate', 'enddate', 'job', 'credit']; }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.memberService.getMemberData(this.authService.getMemberID()).subscribe(
      (memberdata: Member) => {
        this.member = memberdata;
      }
    );
  }

}
