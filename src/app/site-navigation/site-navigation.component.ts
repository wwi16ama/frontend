import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-navigation',
  templateUrl: './site-navigation.component.html',
  styleUrls: ['./site-navigation.component.css']
})
export class SiteNavigationComponent implements OnInit {

  opened: boolean;

  constructor() {
    this.opened = true;
  }

  ngOnInit() {
  }

  public toggleOpened(): void {
    this.opened = !this.opened;
  }

}
