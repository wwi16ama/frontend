import { Component, OnInit } from '@angular/core';

import { Account, Type } from './../models/account.model';
import { AccountService } from './../services/account.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  account: Account;

  constructor(
    public accountService: AccountService, public activatedRoute: ActivatedRoute
    ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        // Zeile 25: funktioniert noch nicht richtig. Aktuell nur Zwischenlsöung, weil ich zu faul war
        this.accountService.getAccountData(1).subscribe(
          (data: Account) => {
            this.account = data;
            for (let i = 0; i < this.account.transactions.length; i++) {
              this.account.transactions[i].type = Type[this.account.transactions[i].type];
            }
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




