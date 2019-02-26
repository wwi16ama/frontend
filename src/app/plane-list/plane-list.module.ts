import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaneListComponent } from './plane-list.component';
import { PlaneService } from './../services/plane.service';
import { EditPlaneDialogModule } from './edit-plane-dialog/edit-plane-dialog.module';
import { DeletePlaneDialogModule } from './delete-plane-dialog/delete-plane-dialog.module';
import { AddPlaneDialogModule } from './add-plane-dialog/add-plane-dialog.module';

import { MatCardModule, MatButtonModule, MatIconModule} from '@angular/material';



@NgModule({
  imports: [
    CommonModule,
    EditPlaneDialogModule,
    DeletePlaneDialogModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    AddPlaneDialogModule
  ],
  declarations: [PlaneListComponent],
  providers: [
    PlaneService,
  ]
})
export class PlaneListModule { }
