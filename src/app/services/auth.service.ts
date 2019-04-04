import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    private loggedInObservable = new BehaviorSubject<boolean>(null);
    private loggedIn: boolean;

    constructor(public httpClient: HttpClient) {
        this.checkLoggedInStatus();
    }

    public checkLoggedInStatus(): void {
        const memberData = JSON.parse(sessionStorage.getItem('memberData'));
        this.loggedIn = memberData !== null ? true : false;
        this.loggedInObservable.next(this.loggedIn);
    }

    public loginRequest(memberID: string, pass: string): Observable<any> {
        const url = environment.baseUrl + '/loginCheck';
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        headers = headers.append('Authorization', 'Basic ' + btoa(memberID + ':' + pass));
        return this.httpClient.get<any>(
            url,
            {
                headers: headers,
                observe: 'response'
            }
        );
    }

    public setAuthHeader(headers = new HttpHeaders()): HttpHeaders {
        const memberData = JSON.parse(sessionStorage.getItem('memberData'));
        headers = headers.set('Content-Type', 'application/json');
        if (memberData.auth !== undefined) {
            headers = headers.set('Authorization', 'Basic ' + memberData.auth);
        }
        return headers;
    }

    public getMemberID(): number {
        const memberAuth = JSON.parse(sessionStorage.getItem('memberData')).auth;
        const memberID = atob(memberAuth).split(':')[0];
        return parseInt(memberID, 10);
    }

    public getMemberPassword(): string {
        const memberAuth = JSON.parse(sessionStorage.getItem('memberData')).auth;
        const memberPW = atob(memberAuth).split(':')[1];
        return memberPW;
    }

    public isLoggedIn(): Observable<boolean> {
        return this.loggedInObservable.asObservable();
    }

    public logIn(memberID: string, pass: string) {
        const auth = btoa(memberID + ':' + pass);
        const memberData = {
            auth: auth
        };
        sessionStorage.setItem('memberData', JSON.stringify(memberData));
        this.loggedIn = true;
        this.loggedInObservable.next(this.loggedIn);
    }

    public logOut(): Observable<any> {
        const url = `${environment.baseUrl}/logout`;
        const headers = this.setAuthHeader();
        sessionStorage.clear();
        this.loggedIn = false;
        this.loggedInObservable.next(this.loggedIn);
        return this.httpClient.get<any>(
            url,
            {
                headers: headers,
                observe: 'response'
            }
        );
    }

    public changePasswordAsMember(newPassword: string): Observable<any> {
        const url = `${environment.baseUrl}/members/${this.getMemberID()}/changePasswordAsMember`;
        const headers = this.setAuthHeader();
        const requestBody = {
            password: this.getMemberPassword(),
            newPassword: newPassword
        };
        return this.httpClient.put<any>(
            url,
            requestBody,
            {
                headers: headers,
                observe: 'response'
            }
        );
    }
}
