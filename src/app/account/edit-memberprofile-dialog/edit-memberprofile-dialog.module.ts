import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditMemberProfileDialogComponent } from './edit-memberprofile-dialog.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDialogModule, MatInputModule, MatButtonModule, MatExpansionModule, MatTabsModule,
  MatDatepickerModule, MatNativeDateModule, MatSelectModule, MatCheckboxModule,
  MatSnackBarModule} from '@angular/material';

  import { SharedDirectivesModule } from './../../directives/shared-directives.module';

@NgModule({
  declarations: [
    EditMemberProfileDialogComponent
  ],
  imports: [
    CommonModule,
    SharedDirectivesModule,
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
    ReactiveFormsModule
  ],
  exports: [EditMemberProfileDialogComponent]
})
export class EditMemberProfileDialogModule { }
