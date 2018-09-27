import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule, MatButtonModule } from '@angular/material';
import { PlaneListComponent } from './plane-list.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,    
    MatButtonModule
  ],
  declarations: [PlaneListComponent]
})
export class PlaneListModule { }
