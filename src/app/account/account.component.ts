import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';

import { Account, Type } from './../models/account.model';
import { AccountService } from './../services/account.service';
import { Member, Status } from './../models/member.model';
import { MemberService } from './../services/member.service';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog, MatSnackBar } from '@angular/material';
import { EditMemberProfileDialogComponent } from './edit-memberprofile-dialog/edit-memberprofile-dialog.component';

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

  @ViewChild(MatPaginator) set paginator(paginator: MatPaginator) {
    if (this.dataSource && paginator) {
      this.dataSource.paginator = paginator;
      this.cdr.detectChanges();
    }
  }
  @ViewChild(MatSort) set sort(sort: ElementRef) {
    if (this.dataSource && sort) {
      this.dataSource.sort = sort;
      this.cdr.detectChanges();
    }
  }

  constructor(
    public accountService: AccountService, public memberService: MemberService, public cdr: ChangeDetectorRef,
    public editMemberProfileDialog: MatDialog, public snackBar: MatSnackBar
  ) {
    this.displayedColumns = ['timestamp', 'amount', 'type'];
  }

  ngOnInit() {
    this.memberService.getMemberData(1).subscribe(
      (memberdata: Member) => {
        this.member = memberdata;
        this.member.status = Status[this.member.status];
        this.accountService.getAccountData(this.member.memberBankingAccount.id).subscribe(
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

 public openEditMemberProfileDialog(): void {
  const dialogRef = this.editMemberProfileDialog.open(EditMemberProfileDialogComponent, {
    maxWidth: '100vw',
    minWidth: '0px',
    maxHeight: '90vh',
    disableClose: true,
    data: JSON.parse(JSON.stringify(this.member))
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result != null) {
      this.saveMemberProfile(result);
    }
  });
 }

public formatMemberStatus (member: any): any {
  member.status = Status.getEnumString(member.status);
  return member;
}

public saveMemberProfile(member: Member): void {
  const newMemberData = JSON.parse(JSON.stringify(member));
  member = this.formatMemberStatus(member);
  this.memberService.updateMemberData(member).subscribe(
    (response) => {
      if (response.status === 204) {
        this.snackBar.open('Änderungen erfolgreich gespeichert.', 'Schließen',
          {
            duration: 3000,
          }
        );
        this.member = newMemberData;
      }
    },
    error => {
      if (error.status === 400) {
        this.snackBar.open('Pflichtfelder nicht ausgefüllt', 'Schließen',
          {
            duration: 4000,
          }
        );
      } else if (error.status === 404) {
        this.snackBar.open('Mitglied nicht gefunden.', 'Schließen',
          {
            duration: 4000,
          }
        );
      } else if (error.status === 0) {
        this.snackBar.open('Es konnte keine Verbindung zum Server aufgebaut werden', 'Schließen',
          {
            duration: 4000,
          }
        );
      }
    }
  );
}
}
