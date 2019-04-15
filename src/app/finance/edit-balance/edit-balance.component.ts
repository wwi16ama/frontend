import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import { ListMember } from 'src/app/models/list-member.model';
import { Transaction } from 'src/app/models/account.model';

@Component({
  selector: 'app-edit-balance',
  templateUrl: './edit-balance.component.html',
  styleUrls: ['./edit-balance.component.css']
})
export class EditBalanceComponent {

  amountFormControl: FormControl;
  textFormControl: FormControl;

  constructor(
    public editBalanceDialogRef: MatDialogRef<EditBalanceComponent>, public snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public Listmember: ListMember
  ) {
    this.initializeFormControls();
  }

  public initializeFormControls(): void {
    this.amountFormControl = new FormControl('', [
      Validators.required
    ]);
    this.textFormControl = new FormControl('', [
      Validators.required
    ]);
  }
  public saveBalanceData(): void {
    console.log(this.amountFormControl.value);
    if (this.checkRequiredFields()) {
      const newTransaction = {
       amount: this.amountFormControl.value,
       text: this.textFormControl.value
      };
      console.log(newTransaction);
      this.editBalanceDialogRef.close(newTransaction);
    }
    }

   public checkRequiredFields(): boolean {
      if (this.amountFormControl.invalid) {
        this.snackBar.open('Kein korrekter Betrag.', 'Schließen',
          {
            duration: 3000,
          }
        );
        return false;
      } else if (this.textFormControl.invalid) {
        this.snackBar.open('Kein korrekter Betreff.', 'Schließen',
          {
            duration: 3000,
          }
        );
        return false;
      } else {
        return true;
      }
    }

  public onNoClick(): void {
    this.editBalanceDialogRef.close();
  }
}
