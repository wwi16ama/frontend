import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { MatTableDataSource, MatDialog, MatSnackBar, MatSort } from '@angular/material';
import { ListMember } from './../models/list-member.model';
import { MemberService } from './../services/member.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Account} from './../models/account.model';
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
  account: Account;
  member: Member;
  listmember: ListMember;
  officeenum: OfficeEnum;
  authorized: boolean;
  memberdata_global: ListMember[];


  @ViewChild(MatSort) set content(sort: ElementRef) {
    this.sort = sort;
    if (this.sort) {
      this.dataSource.sort = this.sort;

    }
  }

  constructor(public accountService: AccountService, public router: Router, public addUserDialog: MatDialog,
    public snackBar: MatSnackBar, public activatedRoute: ActivatedRoute, public editBalanceDialog: MatDialog,
    public memberService: MemberService) {
    this.displayedColumns = ['id', 'firstName', 'lastName', 'memberBankingAccountId', /*'balance'*/];
  }

  ngOnInit() {
    this.memberService.getMemberListData().subscribe(
      (memberdata: ListMember[]) => {
        this.dataSource = new MatTableDataSource(memberdata);
        this.dataSource.sort = this.sort;
        this.memberdata_global = memberdata;
        console.log(memberdata);
/*To edit
        this.accountService.getAccountData(this.dataSource.memberBankingAccountId).subscribe(
        (data: Account) => {
            this.account = data;
            this.account.balance = Account[this.account.balance];
           }
        );*/
      }
    );
  }

    public openFinanceDialog(member: ListMember): void {
      console.log(member);
        const dialogRef = this.editBalanceDialog.open(EditBalanceComponent, {
        maxWidth: '100vw',
        minWidth: '0px',
        maxHeight: '90vh',
        disableClose: true,
        data: JSON.parse(JSON.stringify(member))
      });
      /*
      dialogRef.afterClosed().subscribe(result => {
        if (result != null) {
          this.saveBalance(result);
        }
      */
      }
}

