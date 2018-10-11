import { Component, OnInit } from '@angular/core';

import { MatTableDataSource } from '@angular/material';
import { ListShare } from './../models/list-share.model';
import { ShareListService } from './../services/sharelist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-share-list',
  templateUrl: './share-list.component.html',
  styleUrls: ['./share-list.component.css']
})
export class ShareListComponent implements OnInit {

  displayedColumns: string[];
  dataSource: any;

  constructor(public shareListService: ShareListService, public router: Router) {
    this.displayedColumns = ['memberStatus', 'memberShare'];
  }

  ngOnInit() {
    this.shareListService.getShareListData().subscribe(
      (data: ListShare[]) => {
        this.dataSource = new MatTableDataSource(data);
      }
    );
  }

}
