import { forwardRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PlaneLogComponent } from './plane-log.component';
import { MatTableModule, MatButtonModule, MatSortModule, MatIconModule } from '@angular/material';
import { PlaneLogService } from '../services/planelog.service';


@NgModule({
  declarations: [PlaneLogComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    HttpClientModule,
    MatSortModule,
    MatIconModule
  ],
  exports: [
    PlaneLogComponent,
  ],
  providers: [
    PlaneLogService
  ]
})
export class PlaneLogModule { }
