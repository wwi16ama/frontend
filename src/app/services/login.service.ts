import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs/internal/Subject';

@Injectable()
export class LoginService {

    private loggedInObservable = new Subject<boolean>();
    private loggedIn: boolean;

    constructor(public httpClient: HttpClient) { }

    public loginRequest(username: string, pass: string): Observable<any> {
        const url = environment.baseUrl + '/login';
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        headers = headers.append('Authorization', 'Basic ' + btoa(username + ':' + pass));
        return this.httpClient.get<any>(
            url,
            {
                headers: headers,
                observe: 'response'
            }
        );
    }

    public isLoggedIn(): Observable<boolean> {
        return this.loggedInObservable.asObservable();
    }

    public logIn(username: string, pass: string) {
        const auth = btoa(username + ':' + pass);
        sessionStorage.setItem('auth', auth);
        this.loggedIn = true;
        this.loggedInObservable.next(this.loggedIn);
    }

    public logOut(): void {
        sessionStorage.clear();
        this.loggedIn = false;
        this.loggedInObservable.next(this.loggedIn);
    }
}
