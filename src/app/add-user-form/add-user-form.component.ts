import { Component, Inject } from '@angular/core';
import {Validators} from '@angular/forms';
import {FormControl, FormGroupDirective, NgForm} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import {ErrorStateMatcher} from '@angular/material/core';
import { Member, Office, OfficeEnum, Authorization, AuthorizationEnum } from './../models/member.model';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.css']
})
export class AddUserFormComponent {

  possibleOffices: Office[];
  flightAuthorizations: any [];
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
  streetAddressFormControl: FormControl;
  bankingAccountFormControl: FormControl;
  memberBankingAccountFormControl: FormControl;

  constructor(
    public AddUser: MatDialogRef<AddUserFormComponent>, public snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public member: Member
  ) {
    this.flightAuthorizations = ['PPL-A', 'PPL-e', 'eZF-I', 'eZF-II', 'Lehrbefugnis'];
    this.possibleOffices = [
      new Office(OfficeEnum.FLUGWART),
      new Office(OfficeEnum.IMBETRIEBSKONTROLLTURMARBEITEND),
      new Office(OfficeEnum.KASSIERER),
      new Office(OfficeEnum.SYSTEMADMINISTRATOR),
      new Office(OfficeEnum.VORSTANDSVORSITZENDER)
    ];
    // this.flightAuthorizations = this.member.flightAuthorization.splice(0);
    // for (let i = 0; i < this.flightAuthorizations.length; i++) {
    //   this.flightAuthorizations[i].expires = new FormControl(new Date(this.flightAuthorizations[i].expires));
    // }
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

  // public onNoClick(): void {
  //   this.editMemberDialogRef.close();
  // }

  // Initialisierungsarrays für Selecter
  sex = ['männlich', 'weiblich', 'divers'];
  status = ['Aktiv', 'Passiv', 'Ehrenmitglied'];
  aemter = ['Vorstandvorsitzender', 'Fluglehrer', 'Flugwart',
  'Systemadministrator', 'Kassierer', 'Betriebsdienst Kontrollturm'];

  matcher = new MyErrorStateMatcher();

  public saveMemberData(): void {
    if (this.checkRequiredFields()) {
      this.member.lastName = this.lastNameFormControl.value;
      this.member.firstName = this.firstNameFormControl.value;
      this.member.dateOfBirth = this.formatDate(this.dateOfBirthFormControl.value.toString());
      this.member.gender = this.sexFormControl.value;
      this.member.status = this.statusFormControl.value;
      this.member.email = this.emailFormControl.value;
      this.member.address.postalCode = this.postalCodeFormControl.value;
      this.member.address.streetAddress = this.streetAddressFormControl.value;
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
      // this.addUserDialogRef.close(this.member);
      console.log(this.member);
    }
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
    const parseDate = new Date(date);
    return new Date(parseDate.getTime() - parseDate.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
  }

  public initializeFormControls(): void {
    this.lastNameFormControl = new FormControl( [
      Validators.required
    ]);

    this.firstNameFormControl = new FormControl( [
      Validators.required
    ]);

    this.dateOfBirthFormControl = new FormControl( [
      Validators.required
    ]);

    this.sexFormControl = new FormControl( [
      Validators.required
    ]);

    this.statusFormControl = new FormControl( [
      Validators.required
    ]);

    this.emailFormControl = new FormControl( [
      Validators.email,
      Validators.required
    ]);

    this.postalCodeFormControl = new FormControl( [
      Validators.required
    ]);

    this.streetAddressFormControl = new FormControl( [
      Validators.required
    ]);

    this.cityFormControl = new FormControl( [
      Validators.required
    ]);

    this.bankingAccountFormControl = new FormControl( [
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
    } else if (this.dateOfBirthFormControl.invalid) {
      this.snackBar.open('Kein korrektes Geburtsdatum.', 'Schließen',
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
    } else if (this.bankingAccountFormControl.invalid) {
      this.snackBar.open('Kein korrektes Bankkonto.', 'Schließen',
        {
          duration: 3000,
        }
      );
      return false;
    }
    return true;
  }


}
