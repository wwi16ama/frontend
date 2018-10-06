import { Component, Inject } from '@angular/core';
import { Member, Office, OfficeEnum, Authorization, AuthorizationEnum } from './../../models/member.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit-member-dialog',
  templateUrl: './edit-member-dialog.component.html',
  styleUrls: ['./edit-member-dialog.component.css']
})
export class EditMemberDialogComponent {

  possibleOffices: Office[];
  flightAuthorizations: any[];
  addAuthorization: boolean;
  possibleFlightAuthorizationNames: any[];
  newAuthorization: any;
  addNewAuthorizationPossible: boolean;

  // FormControls for input validation
  firstNameFormControl: FormControl;
  lastNameFormControl: FormControl;
  dateOfBirthFormControl: FormControl;
  sexFormControl: FormControl;
  statusFormControl: FormControl;
  emailFormControl: FormControl;
  postalCodeFormControl: FormControl;
  cityFormControl: FormControl;
  streetFormControl: FormControl;
  bankingAccountFormControl: FormControl;
  memberBankingAccountFormControl: FormControl;

  constructor(
    public editMemberDialogRef: MatDialogRef<EditMemberDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public member: Member
  ) {
    this.possibleOffices = [
      new Office(OfficeEnum.FLUGWART),
      new Office(OfficeEnum.IMBETRIEBSKONTROLLTURMARBEITEND),
      new Office(OfficeEnum.KASSIERER),
      new Office(OfficeEnum.SYSTEMADMINISTRATOR),
      new Office(OfficeEnum.VORSTANDSVORSITZENDER)
    ];
    this.flightAuthorizations = this.member.flightAuthorization.splice(0);
    for (let i = 0; i < this.flightAuthorizations.length; i++) {
      this.flightAuthorizations[i].expires = new FormControl(new Date(this.flightAuthorizations[i].expires));
    }
    this.addAuthorization = false;
    this.possibleFlightAuthorizationNames = [
      { authorization: AuthorizationEnum.PPLA, showNew: false },
      { authorization: AuthorizationEnum.PPLB, showNew: false },
      { authorization: AuthorizationEnum.BZFI, showNew: false },
      { authorization: AuthorizationEnum.BZFII, showNew: false },
      { authorization: AuthorizationEnum.LEHRBEFUGNIS, showNew: false }
    ];
    this.updatePossibleAuthorizations();
    this.newAuthorization = {
      authorization: '',
      expires: new FormControl(new Date()),
      dateOfIssue: new Date().toISOString().slice(0, 10)
    };
    this.addNewAuthorizationPossible = true;
    this.initializeFormControls();
  }

  public onNoClick(): void {
    this.editMemberDialogRef.close();
  }

  public saveMemberData(): void {
    this.member.firstName = this.firstNameFormControl.value;
    this.member.lastName = this.lastNameFormControl.value;
    this.member.dateOfBirth = this.formatDate(this.dateOfBirthFormControl.value.toString());
    this.member.gender = this.sexFormControl.value;
    this.member.status = this.statusFormControl.value;
    this.member.email = this.emailFormControl.value;
    this.member.address.postalCode = this.postalCodeFormControl.value;
    this.member.address.streetAddress = this.streetFormControl.value;
    this.member.address.city = this.cityFormControl.value;
    this.member.bankingAccount = this.bankingAccountFormControl.value;
    this.member.memberBankingAccount = this.memberBankingAccountFormControl.value;

    this.member.flightAuthorization = [];
    for (let i = 0; i < this.flightAuthorizations.length; i++) {
      this.member.flightAuthorization.push(
        new Authorization(
          this.flightAuthorizations[i].authorization,
          this.flightAuthorizations[i].dateOfIssue,
          this.formatDate(this.flightAuthorizations[i].expires.value.toString())
        )
      );
    }
    this.editMemberDialogRef.close(this.member);
  }

  public compareOffices(a, b): boolean {
    return a.title === b.title;
  }

  public toggleAddNewAuthorizationButton(): void {
    if (this.addAuthorization) {
      const pushObject = {
        authorization: this.newAuthorization.authorization,
        expires: this.newAuthorization.expires,
        dateOfIssue: this.newAuthorization.dateOfIssue
      };
      this.flightAuthorizations.push(pushObject);
      this.newAuthorization.authorization = '';
      this.newAuthorization.expires = new FormControl(new Date());
      this.newAuthorization.dateOfIssue = new Date().toISOString().slice(0, 10);
      this.updatePossibleAuthorizations();
    }
    this.addAuthorization = !this.addAuthorization;
  }

  public updatePossibleAuthorizations(): void {
    const allDoneArray = [];
    for (let i = 0; i < this.possibleFlightAuthorizationNames.length; i++) {
      if (this.findInAuthorizationsArray(this.possibleFlightAuthorizationNames[i].authorization)) {
        this.possibleFlightAuthorizationNames[i].showNew = false;
      } else {
        this.possibleFlightAuthorizationNames[i].showNew = true;
        allDoneArray.push('found');
      }
    }
    if (allDoneArray.length > 0) {
      this.addNewAuthorizationPossible = true;
    } else {
      this.addNewAuthorizationPossible = false;
    }
  }

  public findInAuthorizationsArray(toFind): boolean {
    const found = this.flightAuthorizations.find(function (element) {
      return element.authorization === toFind;
    });
    return found;
  }

  public formatDate(date: string): string {
    return new Date(date).toISOString().slice(0, 10);
  }

  public initializeFormControls(): void {
    this.firstNameFormControl = new FormControl(this.member.firstName, [
      Validators.required,
    ]);

    this.lastNameFormControl = new FormControl(this.member.lastName, [
      Validators.required,
    ]);

    this.dateOfBirthFormControl = new FormControl(new Date(this.member.dateOfBirth), [
      Validators.required,
    ]);

    this.sexFormControl = new FormControl(this.member.gender, [
      Validators.required,
    ]);

    this.statusFormControl = new FormControl(this.member.status, [
      Validators.required,
    ]);

    this.emailFormControl = new FormControl(this.member.email, [
      Validators.required,
    ]);

    this.postalCodeFormControl = new FormControl(this.member.address.postalCode, [
      Validators.required,
    ]);

    this.streetFormControl = new FormControl(this.member.address.streetAddress, [
      Validators.required,
    ]);

    this.cityFormControl = new FormControl(this.member.address.city, [
      Validators.required,
    ]);

    this.bankingAccountFormControl = new FormControl(this.member.bankingAccount, [
      Validators.required,
    ]);

    this.memberBankingAccountFormControl = new FormControl(this.member.memberBankingAccount, [
      Validators.required,
    ]);
  }
}
