import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { ListCredit, ServiceNameEnum, PeriodEnum } from './../models/list-credit.model';
import { CreditListService } from './../services/creditlist.service';

@Component({
  selector: 'app-credit-list',
  templateUrl: './credit-list.component.html',
  styleUrls: ['./credit-list.component.css']
})
export class CreditListComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[];
  dataSource: any;

  constructor(public creditListService: CreditListService) {
    this.displayedColumns = ['serviceName', 'amount'];
  }

  ngOnInit() {
    this.creditListService.getCreditListData().subscribe(
      (data: ListCredit[]) => {
        for (let i = 0; i < data.length; i++) {
          data[i].serviceName = ServiceNameEnum[data[i].serviceName];
          data[i].period = PeriodEnum[data[i].period];
        }
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort = this.sort;
      }
    );
  }

}
