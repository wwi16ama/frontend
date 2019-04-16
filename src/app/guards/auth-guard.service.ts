import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {


  constructor(private _router: Router, private authService: AuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.getCurrentLogInStatus()) {
      let isAllowed = false;
      switch (route.url[0].path) {
        case 'memberlist':
          isAllowed = this.checkMemberListRoute();
          break;
        case 'member':
          isAllowed = this.checkMemberViewRoute(route.url[1].path);
          break;
        case 'planelist':
          isAllowed = true;
          break;
        case 'expensingbilllist':
          isAllowed = true;
          break;
        case 'feelist':
          isAllowed = true;
          break;
        case 'creditlist':
          isAllowed = true;
          break;
        case 'account':
          isAllowed = true;
          break;
        case 'login':
          isAllowed = true;
          break;
        case 'pilotlog':
          isAllowed = this.checkPilotLogRoute();
          break;
        case 'planeLog':
          isAllowed = this.checkPlaneLogRoute();
          break;
        case 'change-password':
          isAllowed = true;
          break;
        case 'finance':
          isAllowed = this.checkFinanceRoute();
          break;
      }
      return isAllowed;
    }
    this._router.navigate(['/login']);
    return false;
  }

  private checkMemberListRoute(): boolean {
    return true;
  }

  private checkMemberViewRoute(memberId: string): boolean {
    if (
      this.authService.memberHasAuthorization('VORSTANDSVORSITZENDER') ||
      this.authService.memberHasAuthorization('SYSTEMADMINISTRATOR') ||
      this.authService.memberHasAuthorization('KASSIERER') ||
      this.authService.memberHasAuthorization('FLUGWART')
    ) {
      return true;
    }
    return this.authService.getMemberID() === parseInt(memberId, 10) ? true : false;
  }

  private checkPilotLogRoute(): boolean {
    return this.authService.memberHasAuthorization('PASSIVE') ? false : true;
  }

  private checkPlaneLogRoute(): boolean {
    return this.authService.memberHasAuthorization('PASSIVE') ? false : true;
  }

  private checkFinanceRoute(): boolean {
    return this.authService.memberHasAuthorization('VORSTANDSVORSITZENDER') ? true : true;
  }
}
