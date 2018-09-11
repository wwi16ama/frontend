import { Component } from '@angular/core';
import { User } from '../user';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormControl, FormGroupDirective, NgForm} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.css']
})
export class AddUserFormComponent {

  isLinear = false;
  allgmeinPersoInfo: FormGroup;
  adresse: FormGroup;
  interneInfos: FormGroup;

  // Initialisierungsarrays für Selecter
  geschlecht = ['männlich', 'weiblich'];
  status = ['Aktiv', 'Passiv', 'Ehrenmitglied'];
  aemter = ['Mgl. des Vorstandes', 'Fluglehrer', 'Flugwart'];
  flugberechtigung = ['PPL-A', 'PPL-e', 'eZF-I', 'eZF-II', 'Lehrbefugnis'];

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
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
