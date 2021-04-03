import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators'
import { Router } from '@angular/router';

import { ErrorService } from './error.service'
import { environment } from '../../environments/environment'



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private url = `${environment.apiUrl}/auth`; 
  static getAuthorizationHeader: any;
  
  constructor(
    private http: HttpClient,
    private error: ErrorService,
    private router: Router
  ) { }

  login(credentials:any){
    return this.http.post(this.url,credentials).pipe(
      catchError(this.error.handleError()))
  }
  setToken(token:string):void{
    localStorage.setItem('userapp-token', token);
  }

  isLoggedIn(): boolean {
		return localStorage.getItem('userapp-token') != null;
	}

  logout():void{
    localStorage.removeItem('userapp-token');
    this.router.navigate(['/']);
  }

  static getToken() {
    return localStorage.getItem('userapp-token')
  }
}
