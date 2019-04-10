import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';

import { MatTableDataSource, MatDialog, MatSnackBar, MatSort, MatPaginator, MatSortable } from '@angular/material';
import { ListMember } from './../models/list-member.model';
import { MemberService } from './../services/member.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Account, AddTransaction, Type} from './../models/account.model';
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
  dataSource_mem: any;
  displayedColumns: string[];
  displayedColumns_mem: string[];
  accountVereinskonto: Account;
  member: Member;
  listmember: ListMember;
  officeenum: OfficeEnum;
  authorized: boolean;
  memberdata_global: ListMember[];

  @ViewChild(MatPaginator) set paginator(paginator: MatPaginator) {
    if (this.dataSource && paginator) {
      this.dataSource.paginator = paginator;
      this.cdr.detectChanges();
    }
  }

  @ViewChild(MatSort) set content(sort: ElementRef) {
    this.sort = sort;
    if (this.sort) {
      this.dataSource.sort = this.sort;
      this.dataSource_mem.sort = this.sort;
      this.cdr.detectChanges();
    }
  }

  constructor(public accountService: AccountService, public router: Router, public addUserDialog: MatDialog,
    public snackBar: MatSnackBar, public activatedRoute: ActivatedRoute, public editBalanceDialog: MatDialog,
    public memberService: MemberService, public cdr: ChangeDetectorRef) {
    this.displayedColumns = ['timestamp', 'amount', 'type'];
    this.displayedColumns_mem = ['id', 'firstName', 'lastName', 'memberBankingAccountId'];
  }

  ngOnInit() {
    this.memberService.getMemberListData().subscribe(
      (memberdata: ListMember[]) => {
        this.dataSource_mem = new MatTableDataSource(memberdata);
        this.memberdata_global = memberdata;
      }
    );
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

    public openFinanceDialog(member: ListMember): void {
      console.log(member);
        const dialogRef = this.editBalanceDialog.open(EditBalanceComponent, {
        maxWidth: '100vw',
        minWidth: '0px',
        maxHeight: '90vh',
        disableClose: true,
        data: JSON.parse(JSON.stringify(member))
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result != null) {
          this.saveBalance(result, member.memberBankingAccountId);
        }
      });
    }

  public saveBalance(transaction: AddTransaction, bankId): void {
    this.accountService.addTransaction(transaction, bankId).subscribe(
      (response) => {
        if (response.status === 200) {
          this.snackBar.open('Änderungen erfolgreich gespeichert.', 'Schließen',
            {
              duration: 3000,
            }
          );
          }
      });
  }
}
