import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NumberOnlyDirective } from './number-only.directive';


@NgModule({
  declarations: [
    NumberOnlyDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NumberOnlyDirective
  ]
})
export class SharedDirectivesModule { }
