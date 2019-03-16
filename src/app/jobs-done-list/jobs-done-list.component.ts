import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs-done-list',
  templateUrl: './jobs-done-list.component.html',
  styleUrls: ['./jobs-done-list.component.css']
})
export class JobsDoneListComponent implements OnInit {
  sort: any;
  displayedColumns: string[];
  dataSource: any;

  constructor() { this.displayedColumns = ['date', 'service', 'credit'] }

  ngOnInit() {
  }

}
