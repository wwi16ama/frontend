import { Component, OnInit } from '@angular/core';
import { Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { PasswordErrorStateMatcher } from './../error-state-matcher/password-error-state-matcher/password-error-state-matcher';
import { AuthService } from './../services/auth.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  currentPasswordFormControl: FormControl;
  newPasswordFormControl: FormControl;
  newPasswordFormGroup: FormGroup;
  repeatPasswordMatcher = new PasswordErrorStateMatcher();

  constructor(public formbuilder: FormBuilder, public authService: AuthService, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.initializeFormControls();
  }

  public initializeFormControls(): void {
    this.currentPasswordFormControl = new FormControl('', [
      this.checkCurrentPassword.bind(this)
    ]);

    this.newPasswordFormControl = new FormControl('', [
      Validators.required,
      Validators.pattern(/([0-9].*[a-z])|([a-z].*[0-9])/),
    ]);

    this.newPasswordFormGroup = this.formbuilder.group({
      newPassword: this.newPasswordFormControl,
      newPasswordRepeat: ['']
    }, { validator: this.checkNewPasswords }
    );
  }

  public checkNewPasswords(group: FormGroup): any {
    const newPassword = group.controls.newPassword.value;
    const newPasswordRepeat = group.controls.newPasswordRepeat.value;
    return newPassword === newPasswordRepeat ? null : { passwordsNotSame: true };
  }

  public checkCurrentPassword(control: AbstractControl): ValidationErrors {
    if (control.value !== this.authService.getMemberPassword()) {
      return { invalidCurrentPassword: true };
    }
    return null;
  }

  public sendUpdatePassword(): void {
    if (this.checkIfInputValid()) {
      this.authService.changePasswordAsMember(this.newPasswordFormControl.value).subscribe(
        (response) => {
          if (response.status === 204) {
            this.snackBar.open('Passwort erfolgreich geändert', 'Schließen',
              {
                duration: 3000,
              }
            );
          }
          this.authService.logIn(`${this.authService.getMemberID()}`, this.newPasswordFormControl.value);
      },
      (error) => {
        if (error.status === 401 && error.status === 400) {
          this.snackBar.open('Passwort ändern fehlgeschlagen', 'Schließen',
            {
              duration: 4000,
            }
          );
        }
      });
    }
  }

  public checkIfInputValid(): boolean {
    if (!this.currentPasswordFormControl.invalid && !this.currentPasswordFormControl.invalid) {
      return true;
    }
    return false;
  }
}
