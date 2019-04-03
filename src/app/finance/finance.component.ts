import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { MatTableDataSource, MatDialog, MatSnackBar, MatSort } from '@angular/material';
import { ListMember } from './../models/list-member.model';
import { MemberService } from './../services/member.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Account, Type} from './../models/account.model';
import { Member, OfficeEnum} from './../models/member.model';
import { AccountService } from './../services/account.service';
import { EditBalanceComponent } from './edit-balance/edit-balance.component';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
export class FinanceComponent implements OnInit {
  sort: any;
  dataSource: any;
  displayedColumns: string[];
  accountVereinskonto: Account;
  member: Member;
  listmember: ListMember;
  officeenum: OfficeEnum;
  authorized: boolean;


  @ViewChild(MatSort) set content(sort: ElementRef) {
    this.sort = sort;
    if (this.sort) {
      this.dataSource.sort = this.sort;

    }
  }

  constructor(public accountService: AccountService, public router: Router, public addUserDialog: MatDialog,
    public snackBar: MatSnackBar, public activatedRoute: ActivatedRoute, public editBalanceDialog: MatDialog,
    public memberService: MemberService) {
    this.displayedColumns = ['timestamp', 'amount', 'type'];
  }

  ngOnInit() {
    this.accountService.getAccountVereinskonto().subscribe(
        (accountDataVereinskonto: Account) => {
          this.accountVereinskonto = accountDataVereinskonto;
          for (let i = 0; i < this.accountVereinskonto.transactions.length; i++) {
            this.accountVereinskonto.transactions[i].type = Type[this.accountVereinskonto.transactions[i].type];
          }
          this.dataSource = new MatTableDataSource(this.accountVereinskonto.transactions);
        }
      );
    }

    public openFinanceDialog(account: Account): void {
      const dialogRef = this.editBalanceDialog.open(EditBalanceComponent, {
        maxWidth: '100vw',
        minWidth: '0px',
        maxHeight: '90vh',
        disableClose: true,

      });
      dialogRef.afterClosed().subscribe(result => {
        if (result != null) {
          this.saveBalance(result);
        }
      });
    }
  saveBalance(result: any): any {
    throw new Error('Method not implemented.');
  }
  }

