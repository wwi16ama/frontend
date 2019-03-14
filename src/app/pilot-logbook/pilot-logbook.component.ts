import { Component, OnInit, ViewChild } from '@angular/core';

import { MatTableDataSource, MatSort } from '@angular/material';
import { Member } from './../models/member.model';
import { MemberService } from './../services/member.service';
import { Pilotlog } from './../models/pilotlog.model';
import {PilotlogService} from './../services/pilotlog.service';

@Component({
  selector: 'app-pilot-logbook',
  templateUrl: './pilot-logbook.component.html',
  styleUrls: ['./pilot-logbook.component.css']
})
export class PilotLogbookComponent implements OnInit {

  member: Member;
  pilotlog: Pilotlog[];
  dataSource: any;

  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public memberService: MemberService,
    public pilotLogService: PilotlogService
  ) { }

  ngOnInit() {
    this.memberService.getMemberData(1).subscribe(
      (memberdata: Member) => {
        this.member = memberdata;
        this.pilotLogService.getPilotLogData(this.member.id).subscribe(
          (data: Pilotlog[]) => {
            this.pilotlog = data;
            this.dataSource = new MatTableDataSource(this.pilotlog);
          }
        )
      }
    );
  }

}
