import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs';
import { UsersListComponent } from '../pages/users/users-list/users-list.component';

import { AuthenticationService } from './authentication.service';

describe('AuthenticationService', () => {
  let service: AuthenticationService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [ HttpClientModule, RouterTestingModule ]
    });
    service = TestBed.inject(AuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set and get Token', () => {
    let token ='holamundo' 
    service.setToken(token)
    expect(AuthenticationService.getToken()).toBe(token)
  });

  it('should remove Token', () => {
    let token ='holamundo' 
    service.setToken(token)
    service.logout()
    expect(AuthenticationService.getToken()).toBe(null)
  });

  it('should logout if response is 403', () => {
    let token ='holamundo' 
    service.setToken(token)
    const errorResponse = new HttpErrorResponse({
      error: 'test 403 error',
      status: 403, statusText: 'Unauthorized'
    });
    service.isValidResponse(errorResponse)
    expect(AuthenticationService.getToken()).toBe(null)
  });

  it('should return true if user is logged in', () => {
    let token ='holamundo' 
    service.setToken(token)
    expect(service.isLoggedIn()).toBeTruthy()
  });
  
  it('should return a response from api', () => {
    let credentials = {
      username: '',
      password: ''
    }
    service.login(credentials).subscribe(
      res => expect(res).toBeTruthy, fail
    );
  })
  
  it('should must return a observable', () => {
    let credentials = {
      username: '',
      password: ''
    }
    expect(service.login(credentials)).toBeInstanceOf(Observable);
  });
});
