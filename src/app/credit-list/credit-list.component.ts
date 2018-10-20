import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ListCredit } from './../models/list-credit.model';
import { CreditListService } from './../services/creditlist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-credit-list',
  templateUrl: './credit-list.component.html',
  styleUrls: ['./credit-list.component.css']
})
export class CreditListComponent implements OnInit {

  displayedColumns: string[];
  dataSource: any;

  constructor(public creditListService: CreditListService, public router: Router) {
    this.displayedColumns = ['office', 'credit'];
  }

  ngOnInit() {
    this.creditListService.getCreditListData().subscribe(
      (data: ListCredit[]) => {
        this.dataSource = new MatTableDataSource(data);
      }
    );
  }

}
