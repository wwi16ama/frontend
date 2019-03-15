import { Component, OnInit, ViewChild } from '@angular/core';

import { MatTableDataSource, MatSort } from '@angular/material';
import { Member } from './../models/member.model';
import { MemberService } from './../services/member.service';
import { Pilotlog } from './../models/pilotlog.model';
import { PilotlogService } from './../services/pilotlog.service';

@Component({
  selector: 'app-pilotlog',
  templateUrl: './pilotlog.component.html',
  styleUrls: ['./pilotlog.component.css']
})
export class PilotLogComponent implements OnInit {

  member: Member;
  pilotlog: Pilotlog[];
  dataSource: any;
  displayedColumns: string[];

  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public memberService: MemberService,
    public pilotLogService: PilotlogService
  ) {this.displayedColumns = ['flightId', 'planeNumber', 'departureLocation', 'departureTime',
   'arrivalLocation', 'arrivalTime', 'flightWithGuests']; }

  ngOnInit() {
    this.memberService.getMemberData(1).subscribe(
      (memberdata: Member) => {
        this.member = memberdata;
        this.pilotLogService.getPilotLogData(this.member.id).subscribe(
          (data: Pilotlog[]) => {
            this.pilotlog = data;
            this.dataSource = new MatTableDataSource(this.pilotlog);
          }
        );
      }
    );
  }

}
