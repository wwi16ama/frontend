import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-external-transaction',
  templateUrl: './external-transaction.component.html',
  styleUrls: ['./external-transaction.component.css']
})
export class ExternalTransactionComponent implements OnInit {

  amountFormControl: FormControl;
  textFormControl: FormControl;

  constructor(
    public addExternalTransactionDialogRef: MatDialogRef<ExternalTransactionComponent>,
    public snackBar: MatSnackBar
  ) {
    this.initializeFormControls();
  }

  ngOnInit() {
  }

  public initializeFormControls(): void {
    this.amountFormControl = new FormControl('', [
      Validators.required
    ]);
    this.textFormControl = new FormControl('', [
      Validators.required
    ]);
  }

  public onNoClick(): void {
    this.addExternalTransactionDialogRef.close();
  }

  public saveExternalTransaction(): void {
    if (this.checkRequiredFields()) {
      const newExternalTransaction = {
       amount: this.amountFormControl.value,
       text: this.textFormControl.value
      };
      this.addExternalTransactionDialogRef.close(newExternalTransaction);
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

}
