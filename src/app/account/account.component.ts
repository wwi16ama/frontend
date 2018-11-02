import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';

import { Account, Type } from './../models/account.model';
import { AccountService } from './../services/account.service';
import { Member } from './../models/member.model';
import { MemberService } from './../services/member.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  account: Account;
  member: Member;
  displayedColumns: string[];
  dataSource: any;

  @ViewChild(MatPaginator) set paginator (paginator: MatPaginator) {
    if (this.dataSource && paginator) {
      this.dataSource.paginator = paginator;
      this.cdr.detectChanges();
    }
  }
  @ViewChild(MatSort) set sort (sort: ElementRef) {
    if (this.dataSource && sort) {
      this.dataSource.sort = sort;
      this.cdr.detectChanges();
    }
  }

  constructor(
    public accountService: AccountService, public memberService: MemberService, public cdr: ChangeDetectorRef
  ) {
    this.displayedColumns = ['timestamp', 'amount', 'type'];
  }

  ngOnInit() {
    this.memberService.getMemberData(0).subscribe(
      (memberdata: Member) => {
        this.member = memberdata;
        this.accountService.getAccountData(0).subscribe(
          (data: Account) => {
            this.account = data;
            for (let i = 0; i < this.account.transactions.length; i++) {
              this.account.transactions[i].type = Type[this.account.transactions[i].type];
            }
            this.dataSource = new MatTableDataSource(this.account.transactions);
          }
        );
      }
    );
  }

  public formatStringToEnum(account: any): any {
    for (let i = 0; i < account.transactions.length; i++) {
      account.transactions[i].type = Type.getEnumString(account.transactions[i].type);
    }
    return account;
  }
}




