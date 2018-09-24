import { Component, OnInit } from '@angular/core';
import { Member, Status, Gender } from './../models/member.model';
import { MemberService } from './../services/member.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-member-view',
  templateUrl: './member-view.component.html',
  styleUrls: ['./member-view.component.css']
})
export class MemberViewComponent implements OnInit {
  member: Member;

  constructor(public memberService: MemberService, public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        this.memberService.getMemberData(params['id']).subscribe(
          (data: Member) => {
            this.member = data;
            this.member.gender = Gender[this.member.gender];
            this.member.status = Status[this.member.status];
          }
        );
      }
    );
  }

}
