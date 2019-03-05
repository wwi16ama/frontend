import { Component, Inject } from '@angular/core';
import { MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import { Member } from 'src/app/models/member.model';

@Component({
  selector: 'app-edit-memberprofile-dialog',
  templateUrl: './edit-memberprofile-dialog.component.html',
  styleUrls: ['./edit-memberprofile-dialog.component.css']
})
export class EditMemberProfileDialogComponent {

  firstNameFormControl: FormControl;
  lastNameFormControl: FormControl;
  emailFormControl: FormControl;
  postalCodeFormControl: FormControl;
  cityFormControl: FormControl;
  streetAddressFormControl: FormControl;

  constructor(
    public editMemberProfileDialogRef: MatDialogRef<EditMemberProfileDialogComponent>,
    public snackBar: MatSnackBar, @Inject(MAT_DIALOG_DATA) public member: Member
  ) {
    this.initializeFormControls();
  }

  public onNoClick(): void {
    this.editMemberProfileDialogRef.close();
  }

  public saveMemberProfileData(): void {
    if (this.checkRequiredFields()) {
      this.member.firstName = this.firstNameFormControl.value;
      this.member.lastName = this.lastNameFormControl.value;
      this.member.email = this.emailFormControl.value;
      this.member.address.postalCode = this.postalCodeFormControl.value;
      this.member.address.streetAddress = this.streetAddressFormControl.value;
      this.member.address.city = this.cityFormControl.value;
      this.editMemberProfileDialogRef.close(this.member);
    }
  }

  public initializeFormControls(): void {
    this.firstNameFormControl = new FormControl(this.member.firstName, [
      Validators.required
    ]);

    this.lastNameFormControl = new FormControl(this.member.lastName, [
      Validators.required
    ]);

    this.emailFormControl = new FormControl(this.member.email, [
      Validators.email,
      Validators.required
    ]);

    this.postalCodeFormControl = new FormControl(this.member.address.postalCode, [
      Validators.required
    ]);

    this.streetAddressFormControl = new FormControl(this.member.address.streetAddress, [
      Validators.required
    ]);

    this.cityFormControl = new FormControl(this.member.address.city, [
      Validators.required
    ]);
  }

  public checkRequiredFields(): boolean {
    if (this.firstNameFormControl.invalid) {
      this.snackBar.open('Kein korrekter Vorname.', 'Schließen',
        {
          duration: 3000,
        }
      );
      return false;
    } else if (this.lastNameFormControl.invalid) {
      this.snackBar.open('Kein korrekter Nachname.', 'Schließen',
        {
          duration: 3000,
        }
      );
      return false;
    } else if (this.emailFormControl.invalid) {
      this.snackBar.open('Keine korrekte Email.', 'Schließen',
        {
          duration: 3000,
        }
      );
      return false;
    } else if (this.postalCodeFormControl.invalid) {
      this.snackBar.open('Keine korrekte Postleitzahl.', 'Schließen',
        {
          duration: 3000,
        }
      );
      return false;
    } else if (this.streetAddressFormControl.invalid) {
      this.snackBar.open('Keine korrekte Straße.', 'Schließen',
        {
          duration: 3000,
        }
      );
      return false;
    } else if (this.cityFormControl.invalid) {
      this.snackBar.open('Keine korrekte Stadt.', 'Schließen',
        {
          duration: 3000,
        }
      );
      return false;
      }
    return true;
  }

}
