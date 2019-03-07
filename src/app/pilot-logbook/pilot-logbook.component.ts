import { Component, OnInit, ViewChild } from '@angular/core';

import { MatTableDataSource, MatSort } from '@angular/material';
import { Member } from './../models/member.model';
import { MemberService } from './../services/member.service';

@Component({
  selector: 'app-pilot-logbook',
  templateUrl: './pilot-logbook.component.html',
  styleUrls: ['./pilot-logbook.component.css']
})
export class PilotLogbookComponent implements OnInit {

  member: Member;

  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public memberService: MemberService
  ) { }

  ngOnInit() {
    this.memberService.getMemberData(1).subscribe(
      (memberdata: Member) => {
        this.member = memberdata;
      }
    );
  }

}
