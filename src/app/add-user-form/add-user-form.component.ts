import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormControl, FormGroupDirective, NgForm} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

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

  allgmeinPersoInfo: FormGroup;
  adresse: FormGroup;
  interneInfos: FormGroup;

  // Initialisierungsarrays für Selecter
  sex = ['männlich', 'weiblich'];
  status = ['Aktiv', 'Passiv', 'Ehrenmitglied'];
  aemter = ['Vorstandvorsitzender', 'Fluglehrer', 'Flugwart',
  'Systemadministrator', 'Kassierer', 'Betriebsdienst Kontrollturm'];
  flugberechtigung = ['PPL-A', 'PPL-e', 'eZF-I', 'eZF-II', 'Lehrbefugnis'];
  state = ["Baden-Württemberg",
    "Bayern",
    "Berlin", 
    "Brandenburg",
    "Bremen", 
    "Hamburg", 
    "Hessen",
    "Mecklenburg-Vorpommern",
    "Niedersachsen",
    "Nordrhein-Westfalen",
    "Rheinland-Pfalz",
    "Saarland",
    "Sachsen",
    "Sachsen-Anhalt",
    "Schleswig-Holstein",
    "Thüringen"];

  // Validierung der User-Form
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  nameFormControl = new FormControl('', [
    Validators.required,
  ]);

  firstNameFormControl = new FormControl('', [
    Validators.required,
  ]);

  birthdayFormControl = new FormControl('', [
    Validators.required,
  ]);

  sexFormControl = new FormControl('', [
    Validators.required,
  ]);

  postalCodeFormControl = new FormControl('', [
    Validators.required,
  ]);

  cityFormControl = new FormControl('', [
    Validators.required,
  ]);

  stateFormControl = new FormControl('', [
    Validators.required,
  ]);

  streetFormControl = new FormControl('', [
    Validators.required,
  ]);

  houseNumberFormControl = new FormControl('', [
    Validators.required,
  ]);

  statusFormControl = new FormControl('', [
    Validators.required,
  ]);

  bankingAccountFormControl = new FormControl('', [
    Validators.required,
  ]);

  matcher = new MyErrorStateMatcher();

  submitted = false;

  onSubmit() { this.submitted = true; }

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.allgmeinPersoInfo = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.adresse = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.interneInfos = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

}
