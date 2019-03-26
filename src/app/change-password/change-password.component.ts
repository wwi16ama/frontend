import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { PasswordErrorStateMatcher } from './../error-state-matcher/password-error-state-matcher/password-error-state-matcher';


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  passwordFormControl: FormControl;
  passwordFormGroup: FormGroup;
  passwordMatcher = new PasswordErrorStateMatcher();

  constructor(public formbuilder: FormBuilder) { }

  ngOnInit() {
    this.initializeFormControls();
  }

  public initializeFormControls(): void {
    this.passwordFormControl = new FormControl('', [
      Validators.required,
      Validators.pattern(/([0-9].*[a-z])|([a-z].*[0-9])/),
    ]);

    this.passwordFormGroup = this.formbuilder.group({
      password: this.passwordFormControl,
      passwordRepeat: ['']
    }, { validator: this.checkPasswords });
  }

  public checkPasswords(group: FormGroup) {
    const password = group.controls.password.value;
    const passwordRepeat = group.controls.passwordRepeat.value;

    return password === passwordRepeat ? null : { passwordsNotSame: true };
  }

}
