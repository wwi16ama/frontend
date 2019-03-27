import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { MatTableDataSource, MatDialog, MatSnackBar, MatSort } from '@angular/material';
import { ListMember } from './../models/list-member.model';
import { MemberService } from './../services/member.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Member} from './../models/member.model';
import { DataSource } from '@angular/cdk/table';


@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
export class FinanceComponent implements OnInit {
  sort: any;
  dataSource: any;
  displayedColumns: string[];


  @ViewChild(MatSort) set content(sort: ElementRef) {
    this.sort = sort;
    if (this.sort) {
      this.dataSource.sort = this.sort;

    }
  }

  constructor(public router: Router, public addUserDialog: MatDialog, public snackBar: MatSnackBar, public activatedRoute: ActivatedRoute,
    public memberService: MemberService) {
    this.displayedColumns = ['id', 'firstName', 'lastName', 'memberBankingAccountId'];
  }

  ngOnInit() {
    this.memberService.getMemberListData().subscribe(
      (data: ListMember[]) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort = this.sort;
      }
    );
    }
  }
