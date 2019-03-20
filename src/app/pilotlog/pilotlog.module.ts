import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PilotLogComponent } from './pilotlog.component';

import { MatTableModule, MatButtonModule, MatSortModule} from '@angular/material';
import { AddPilotlogentryModule } from './add-pilotlogentry/add-pilotlogentry.module';
import { PilotlogService } from './../services/pilotlog.service';

@NgModule({
  declarations: [
    PilotLogComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatSortModule,
    AddPilotlogentryModule
  ],
  providers: [
    PilotlogService
  ]

})
export class PilotLogModule {}
