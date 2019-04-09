import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditBalanceComponent } from './edit-balance.component';
import { MatDialogModule, MatInputModule, MatButtonModule, MatExpansionModule,
  MatTabsModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule,
  MatCheckboxModule, MatSnackBarModule, DateAdapter } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateAdapterService } from 'src/app/services/date-adapter.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [EditBalanceComponent],
  imports: [
      CommonModule,
      MatDialogModule,
      MatInputModule,
      MatButtonModule,
      MatExpansionModule,
      MatTabsModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatSelectModule,
      MatCheckboxModule,
      MatSnackBarModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule
    ],
    exports: [
      EditBalanceComponent
    ],
    providers: [
      { provide: DateAdapter, useClass: DateAdapterService },
    ]

})
export class EditBalanceModule { }
