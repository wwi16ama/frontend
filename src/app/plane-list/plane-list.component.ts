import { Component, OnInit } from '@angular/core';
import { PlaneListService } from './../services/planelist.service';
import { Plane, neededAuthorizationEnum } from './../models/plane.model';

@Component({
  selector: 'app-plane-list',
  templateUrl: './plane-list.component.html',
  styleUrls: ['./plane-list.component.css']
})
export class PlaneListComponent implements OnInit {

  planes: Plane[];

  constructor(public planelistService: PlaneListService) {
    this.planes = [];
  }

  ngOnInit() {
    this.planelistService.getPlaneListData().subscribe(
      (planedata: Plane[]) => {
        this.planes = planedata;
        for (let i = 0; i < this.planes.length; i++) {
          this.planes[i].neededAuthorization = neededAuthorizationEnum[this.planes[i].neededAuthorization];
        }
        console.log(this.planes);
      }
    );
  }

}
