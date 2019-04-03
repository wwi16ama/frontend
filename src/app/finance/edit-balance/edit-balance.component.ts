import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import { ListMember } from 'src/app/models/list-member.model';

@Component({
  selector: 'app-edit-balance',
  templateUrl: './edit-balance.component.html',
  styleUrls: ['./edit-balance.component.css']
})
export class EditBalanceComponent {

  amountFormControl: FormControl;
  typeFormControl: FormControl;

  constructor(
    public editBalanceDialogRef: MatDialogRef<EditBalanceComponent>, public snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public Listmember: ListMember
  ) {
    this.initializeFormControls();
    console.log(Listmember.id);
  }

  public initializeFormControls(): void {
  }
  public saveBalanceData(): void {
    console.log(this.amountFormControl.value);
    /* const newTransaction = {
        amount: this.amountFormControl.value,
        type: this.typeFormControl.value
      };
      console.log(newTransaction);*/
    }

  public onNoClick(): void {
    this.editBalanceDialogRef.close();
  }


  public checkRequiredFields(): boolean {
    if (this.amountFormControl.invalid) {
      this.snackBar.open('Kein korrekter Betrag.', 'Schließen',
        {
          duration: 3000,
        }
      );
      return false;
    } else if (this.typeFormControl.invalid) {
      this.snackBar.open('Kein korrekter Typ.', 'Schließen',
        {
          duration: 3000,
        }
      );
      return false;
      }
    return true;
  }}
