import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';

import { MatTableDataSource, MatDialog, MatSnackBar, MatSort, MatPaginator } from '@angular/material';
import { ListMember } from './../models/list-member.model';
import { MemberService } from './../services/member.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Account, AddTransaction, Transaction} from './../models/account.model';
import { Member, OfficeEnum} from './../models/member.model';
import { AccountService } from './../services/account.service';
import { EditBalanceComponent } from './edit-balance/edit-balance.component';
import { ExternalTransactionComponent } from './external-transaction/external-transaction.component';

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

  /*@ViewChild(MatPaginator) set paginator(paginator: MatPaginator) {
    if (this.dataSource && paginator) {
      this.dataSource.paginator = paginator;
      this.cdr.detectChanges();
    }
  }*/
  @ViewChild('memberListPaginator') memberListPaginator: MatPaginator;
  @ViewChild('bankingAccountPaginator') bankingAccountPaginator: MatPaginator;
  @ViewChild('memberListSort') memberListSort: MatSort;
  @ViewChild('bankingAccountSort') bankingAccountSort: MatSort;

  constructor(public accountService: AccountService, public router: Router, public addUserDialog: MatDialog,
    public snackBar: MatSnackBar, public activatedRoute: ActivatedRoute, public editBalanceDialog: MatDialog,
    public memberService: MemberService, public cdr: ChangeDetectorRef, public externalTransactionDialog: MatDialog) {
    this.displayedColumns = ['timestamp', 'amount', 'text'];
    this.displayedColumns_mem = ['id', 'firstName', 'lastName', 'memberBankingAccountId'];
  }

  ngOnInit() {
    this.memberService.getMemberListData().subscribe(
      (memberdata: ListMember[]) => {
        this.dataSource_mem = new MatTableDataSource(memberdata);
        this.dataSource_mem.sort = this.memberListSort;
        this.dataSource_mem.paginator = this.memberListPaginator;
      }
    );
    this.accountService.getAccountVereinskonto().subscribe(
      (accountDataVereinskonto: Account) => {
        this.accountVereinskonto = accountDataVereinskonto;
        for (let i = 0; i < this.accountVereinskonto.transactions.length; i++) {
          this.accountVereinskonto.transactions[i].text = this.accountVereinskonto.transactions[i].text;
        }
        this.dataSource = new MatTableDataSource(this.accountVereinskonto.transactions);
        this.dataSource.sort = this.bankingAccountSort;
        this.dataSource.paginator = this.bankingAccountPaginator;
      }
    );
  }

  public openFinanceDialog(member: ListMember): void {
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

  openexternalTransactionDialog(): void {
    const dialogRef = this.externalTransactionDialog.open(ExternalTransactionComponent, {
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this.saveExternalTransaction(result);
      }
    });
  }

  public saveExternalTransaction(externalTransaction: AddTransaction): void {
    this.accountService.addExternalTransaction(externalTransaction).subscribe(
      (response) => {
        if (response.status === 200) {
          this.snackBar.open('Änderungen erfolgreich gespeichert.', 'Schließen',
            {
              duration: 3000,
            }
          );
          const newExternalTransaction = new Transaction (
            response.body.id,
            response.body.timestamp,
            response.body.amount,
            response.body.text
          );
          this.dataSource.data.push(newExternalTransaction);
          this.dataSource.sort = this.bankingAccountSort;
        }
      },
      error => {
      if (error.status === 400) {
          this.snackBar.open('Pflichtfelder falsch oder nicht ausgefüllt', 'Schließen',
            {
              duration: 4000,
            }
          );
        } else if (error.status === 404) {
          this.snackBar.open('Account wurde nicht gefunden', 'Schließen',
            {
              duration: 4000,
            }
          );
        }
      });
  }
}
