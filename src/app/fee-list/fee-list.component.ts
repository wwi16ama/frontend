import { Component, OnInit, ViewChild } from '@angular/core';

import { MatTableDataSource, MatSort } from '@angular/material';
import { ListFee, categoryEnum } from '../models/list-fee.model';
import { FeeListService } from './../services/feelist.service';

@Component({
  selector: 'app-fee-list',
  templateUrl: './fee-list.component.html',
  styleUrls: ['./fee-list.component.css']
})
export class FeeListComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[];
  dataSource: any;

  constructor(public feeListService: FeeListService) {
    this.displayedColumns = ['category', 'fee'];
  }

  ngOnInit() {
    this.feeListService.getFeeListData().subscribe(
      (data: ListFee[]) => {
        for (let i = 0; i < data.length; i++) {
          data[i].category = categoryEnum[data[i].category];
        }
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort = this.sort;
      }
    );
  }

}
