import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule, MatButtonModule, MatIconModule } from '@angular/material';
import { PlaneListComponent } from './plane-list.component';
import { PlaneListService } from './../services/planelist.service';


@NgModule({
  imports: [
    CommonModule,
    MatCardModule,    
    MatButtonModule,
    MatIconModule
  ],
  declarations: [PlaneListComponent], 
  providers: [PlaneListService]
})
export class PlaneListModule { }
