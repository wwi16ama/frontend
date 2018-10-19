import { Component, OnInit } from '@angular/core';

import { MatTableDataSource } from '@angular/material';
import { ListFee } from '../models/list-fee.model';
import { FeeListService } from './../services/feelist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fee-list',
  templateUrl: './fee-list.component.html',
  styleUrls: ['./fee-list.component.css']
})
export class FeeListComponent implements OnInit {

  displayedColumns: string[];
  dataSource: any;

  constructor(public feeListService: FeeListService, public router: Router) {
    this.displayedColumns = ['memberCategory', 'memberFee'];
  }

  ngOnInit() {
    this.feeListService.getFeeListData().subscribe(
      (data: ListFee[]) => {
        this.dataSource = new MatTableDataSource(data);
      }
    );
  }

}
