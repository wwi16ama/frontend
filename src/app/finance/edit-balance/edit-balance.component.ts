import { Component, Inject, OnInit } from '@angular/core';
import { Member } from './../../models/member.model';
import { Account, Transaction } from './../../models/account.model';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-balance',
  templateUrl: './edit-balance.component.html',
  styleUrls: ['./edit-balance.component.css']
})
export class EditBalanceComponent {

  numberFormControl: FormControl;
  nameFormControl: FormControl;
  positionFormControl: FormControl;

  constructor(
    public editBalanceDialogRef: MatDialogRef<EditBalanceComponent>, public snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public member: Member, public account: Account, public transaction: Transaction
  ) {
    this.initializeFormControls();
  }


  public onNoClick(): void {
    this.editBalanceDialogRef.close();
  }

  public saveBalanceData(): void {
    if (this.checkRequiredFields()) {
      this.account.balance = this.numberFormControl.value;
      this.transaction.type = this.nameFormControl.value;

      this.editBalanceDialogRef.close(this.account);
    }
  }

  public initializeFormControls(): void {
    this.numberFormControl = new FormControl(this.account.balance, [
      Validators.required
    ]);

    this.nameFormControl = new FormControl(this.transaction.type, [
      Validators.required
    ]);

  }

  public checkRequiredFields(): boolean {
    if (this.numberFormControl.invalid) {
      this.snackBar.open('Kein korrekter Betrag.', 'Schließen',
        {
          duration: 3000,
        }
      );
      return false;
    } else if (this.nameFormControl.invalid) {
      this.snackBar.open('Kein korrekter Typ.', 'Schließen',
        {
          duration: 3000,
        }
      );
      return false;
      }
    return true;
  }}
