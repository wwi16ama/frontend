import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaneListComponent } from './plane-list.component';
import { PlaneListService } from './../services/planelist.service';
import { EditPlaneDialogModule } from './edit-plane-dialog/edit-plane-dialog.module';

import { MatCardModule, MatButtonModule, MatIconModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    EditPlaneDialogModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [PlaneListComponent],
  providers: [PlaneListService]
})
export class PlaneListModule { }
