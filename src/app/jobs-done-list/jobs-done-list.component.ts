import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material';
import { Member } from './../models/member.model';
import { MemberService } from './../services/member.service';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-jobs-done-list',
  templateUrl: './jobs-done-list.component.html',
  styleUrls: ['./jobs-done-list.component.css']
})
export class JobsDoneListComponent implements OnInit {

  member: Member;

  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[];
  dataSource: any;

  constructor(public authService: AuthService, public memberService: MemberService,) { 
    
    this.displayedColumns = ['date', 'start', 'credit']; }

  ngOnInit() {
    this.memberService.getMemberData(this.authService.getMemberID()).subscribe(
      (memberdata: Member) => {
        this.member = memberdata;
      }
    );
  }

}
