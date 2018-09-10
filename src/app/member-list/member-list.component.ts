import { Component, OnInit, ViewChild } from '@angular/core';

import { MatSort, MatTableDataSource } from '@angular/material';
import { ListMember } from './../models/list-member.model';
import { MemberListService } from './../services/memberlist.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'firstName', 'lastName'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatSort) sort: MatSort;

  constructor(public memberListService: MemberListService) { }

  ngOnInit() {
    this.memberListService.getMemberListData().subscribe(
      (data: ListMember[]) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort = this.sort;
      }
    );
  }

}
