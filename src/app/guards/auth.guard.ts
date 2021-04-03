import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';

import { AuthenticationService } from '../services/authentication.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(
    public auth: AuthenticationService, 
    public router: Router
  ){}
  canActivate(
    ): boolean {
      if (!this.auth.isLoggedIn()) {
        this.router.navigate(['']);
        return false;
      }
      return true;
  }
  
}
