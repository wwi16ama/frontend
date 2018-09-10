import { Component, OnInit } from '@angular/core';
import { Member } from './../models/member.model';
import { MemberService } from './../services/member.service';

@Component({
  selector: 'app-member-view',
  templateUrl: './member-view.component.html',
  styleUrls: ['./member-view.component.css']
})
export class MemberViewComponent implements OnInit {
  member: Member;

  constructor(public memberService: MemberService) { }

  ngOnInit() {
    this.memberService.getMemberData().subscribe(
      (data: Member) => {
        this.member = data;
      }
    );
  }

}
