import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PilotLogComponent } from './pilotlog.component';

import { MatTableModule, MatButtonModule, MatSortModule} from '@angular/material';

@NgModule({
  declarations: [PilotLogComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatSortModule
  ]
})
export class PilotLogModule {}
