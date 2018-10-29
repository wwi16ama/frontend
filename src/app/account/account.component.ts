import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Account, Type } from './../models/account.model';
import { AccountService } from './../services/account.service';
import { Member } from './../models/member.model';
import { MemberService } from './../services/member.service';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  sort: any;
  account: Account;
  member: Member;
  displayedColumns: string[];
  dataSource: any;

  @ViewChild(MatSort) set content(sort: ElementRef) {
    this.sort = sort;
    if (this.sort){
       this.dataSource.sort = this.sort;
  
    }
  }

  constructor(
    public accountService: AccountService, public memberService: MemberService
  ) {
    this.displayedColumns = ['timestamp', 'amount', 'type'];
  }

  ngOnInit() {
    // Zeile 26: funktioniert noch nicht richtig. Aktuell nur Zwischenlsöung, weil ich zu faul war
    this.accountService.getAccountData(0).subscribe(
      (data: Account) => {

        this.account = data;

        for (let i = 0; i < this.account.transactions.length; i++) {
          this.account.transactions[i].type = Type[this.account.transactions[i].type];
        }
        this.dataSource = new MatTableDataSource(this.account.transactions);
        this.dataSource.sort = this.sort;
      }

    );
    // siehe Zeile 25
    this.memberService.getMemberData(0).subscribe(
      (memberdata: Member) => {
        this.member = memberdata;
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




