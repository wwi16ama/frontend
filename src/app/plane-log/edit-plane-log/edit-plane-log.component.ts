import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { AuthService } from '../../services/auth.service';
import { Plane } from '../../models/plane.model';
import { PlaneLogService } from '../../services/planelog.service';
import { PlaneLog } from '../../models/planelog.model';
import { Member } from '../../models/member.model';
import { MemberService } from '../../services/member.service';
import { PlaneLogComponent } from "../plane-log.component";

@Component({
  selector: 'app-edit-plane-log',
  templateUrl: './edit-plane-log.component.html',
  styleUrls: ['./edit-plane-log.component.css'],
})
export class EditPlaneLogComponent implements OnInit {
  member: Member;
  planeNumber: string;
  location: string;
  initialFuelLevel: string;
  finalFuelLevel: string;
  price: string;
  date= new Date();
  editPlaneLog: any;

  planeNumberFormControl: FormControl;
  locationFormControl: FormControl;
  initialFuelLevelFormControl: FormControl;
  finalFuelLevelFormControl: FormControl;
  priceFormControl: FormControl;

  constructor(public planeLogService: PlaneLogService, public memberService: MemberService, public editPlaneLogDialogRef: MatDialogRef<EditPlaneLogComponent>, public snackBar: MatSnackBar, public authService: AuthService) {
    editPlaneLogDialogRef.disableClose = true;

    this.planeNumberFormControl = new FormControl ('', [
      Validators.required,
    ]);
    this.locationFormControl = new FormControl ('', [
      Validators.required,
    ]);
    this.initialFuelLevelFormControl = new FormControl ('', [
      Validators.required,
    ]);
    this.finalFuelLevelFormControl = new FormControl ('', [
      Validators.required,
    ]);
    this.priceFormControl = new FormControl ('', [
      Validators.required,
    ]);
   }

   public onNoClick(): void {
    this.editPlaneLogDialogRef.close();
  }

  public updatePlaneLogData(): void {
    if (this.checkRequiredFields()) {
      const newPlaneLog = {
        memberId: this.member.id,
        location: this.locationFormControl.value,
        refuelDateTime: this.formatDate(new Date(
          this.date.getFullYear(),
          this.date.getMonth(),
          this.date.getDate(),
          this.date.getHours(),
          this.date.getMinutes(),
          this.date.getSeconds()
        ).toString()),
        startCount: this.initialFuelLevelFormControl.value,
        endCount: this.finalFuelLevelFormControl.value,
        fuelPrice: this.priceFormControl.value
      };
      if (this.initialFuelLevelFormControl.value > this.finalFuelLevelFormControl.value) {
        this.editPlaneLogDialogRef.close(newPlaneLog);
      } else {
        this.snackBar.open('Der Anfangsstand muss größer als der Endstand sein.', 'Schließen',
        {
          duration: 3000,
        }
      );
      }
  }}

  public formatDate(date: string): string {
    const parseDate = new Date(date);
    return new Date(parseDate.getTime() - parseDate.getTimezoneOffset() * 60000).toISOString();
  }

   public checkRequiredFields(): boolean {
    if (this.locationFormControl.invalid ) {
      this.snackBar.open('Kein gültiger Ort.', 'Schließen',
        {
          duration: 3000,
        }
      );
      return false;
    } else if (this.initialFuelLevelFormControl.invalid) {
      this.snackBar.open('Kein gültiger Anfangsstand.', 'Schließen',
        {
          duration: 3000,
        }
      );
      return false;
    } else if (this.finalFuelLevelFormControl.invalid) {
      this.snackBar.open('Keine gültiger Endstand', 'Schließen',
        {
          duration: 3000,
        }
      );
      return false;
    } else if (this.priceFormControl.invalid) {
      this.snackBar.open('Kein gültiger Preis.', 'Schließen',
        {
          duration: 3000,
        }
      );
      return false;
    } 
    return true;
  }

  ngOnInit() {
    this.memberService.getMemberData(this.authService.getMemberID()).subscribe(
      (memberdata: Member) => {
        this.member = memberdata;
      }
    );
    this.editPlaneLog = PlaneLogComponent.getEditPlaneLog();
    this.locationFormControl.setValue(this.editPlaneLog[1]);
    this.initialFuelLevelFormControl.setValue(this.editPlaneLog[2]);
    this.finalFuelLevelFormControl.setValue(this.editPlaneLog[3]);
    this.priceFormControl.setValue(this.editPlaneLog[4]);
  }

}
