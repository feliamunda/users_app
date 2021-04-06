import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { environment } from '../../environments/environment'
import { AuthenticationService } from './authentication.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = `${environment.apiUrl}/api`; 

  constructor(
    private http: HttpClient
  ) { }
  
  getUsers(){
    return this.http.get(this.url)
  }

  userExists(username:string){
    return this.http.get(this.url+'/exist/')
  }

}
