import { Component, OnInit } from '@angular/core';

import { Account, Type } from './../models/account.model';
import { AccountService } from './../services/account.service';
import { Member } from './../models/member.model';
import { MemberService } from './../services/member.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  account: Account;
  member: Member;

  constructor(
    public accountService: AccountService, public memberService: MemberService
    ) {}

  ngOnInit() {
      // Zeile 26: funktioniert noch nicht richtig. Aktuell nur Zwischenlsöung, weil ich zu faul war
      this.accountService.getAccountData(0).subscribe(
        (data: Account) => {
          this.account = data;
          for (let i = 0; i < this.account.transactions.length; i++) {
              this.account.transactions[i].type = Type[this.account.transactions[i].type];
          }
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




