import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';

import {MatListModule, MatDividerModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatDividerModule
  ],
  declarations: [AccountComponent]
})
export class AccountModule { }
