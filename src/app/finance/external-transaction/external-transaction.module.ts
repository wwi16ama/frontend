import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatButtonModule, MatFormFieldModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ExternalTransactionComponent } from './external-transaction.component';

@NgModule({
  declarations: [ExternalTransactionComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule
  ],
  exports: [ExternalTransactionComponent]
})
export class ExternalTransactionModule { }
