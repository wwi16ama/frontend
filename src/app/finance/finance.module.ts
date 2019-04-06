import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinanceComponent } from './finance.component';
import {MatSelectModule} from '@angular/material/select';
import { MatPaginatorModule, MatIconModule, MatButtonModule, MatCheckboxModule, MatFormFieldModule,
  MatInputModule, MatStepperModule, MatCardModule, MatTooltipModule, MatDatepickerModule,
  MatNativeDateModule, MatSortModule, MatDialogModule, MatTabsModule, MatTableModule, MatListModule } from '@angular/material';
import { SharedDirectivesModule } from '../directives/shared-directives.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FinanceComponent],
  imports: [
    CommonModule,
    SharedDirectivesModule,
    MatButtonModule,
    MatTableModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatStepperModule,
    MatCardModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatIconModule,
    MatListModule,
    MatSortModule,
    MatPaginatorModule
  ]
})
export class FinanceModule { }
