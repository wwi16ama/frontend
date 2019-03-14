import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {


  constructor(private _router: Router) {
  }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (sessionStorage.getItem('memberData')) {
        return true;
    }
    this._router.navigate(['/login']);
    return false;
  }
}
