import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PilotLogComponent } from './pilotlog.component';

import { MatTableModule, MatButtonModule, MatSortModule} from '@angular/material';
import { AddPilotlogentryComponent } from './add-pilotlogentry/add-pilotlogentry.component';
import { PilotlogService } from './../services/pilotlog.service';

@NgModule({
  declarations: [
    PilotLogComponent, 
    AddPilotlogentryComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatSortModule
  ],
  providers: [
    PilotlogService
  ]

})
export class PilotLogModule {}
