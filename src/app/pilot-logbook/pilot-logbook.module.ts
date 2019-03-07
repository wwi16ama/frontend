import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PilotLogbookComponent } from './pilot-logbook.component';

import { MatTableModule, MatButtonModule, MatSortModule} from '@angular/material';

@NgModule({
  declarations: [PilotLogbookComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatSortModule
  ]
})
export class PilotLogbookModule { }
