import { NativeDateAdapter } from '@angular/material';
import { Injectable } from '@angular/core';

@Injectable()
export class DateAdapterService extends NativeDateAdapter {

  getFirstDayOfWeek(): number {
    return 1;
  }

}
