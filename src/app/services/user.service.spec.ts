import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { UserService } from './user.service';
import { Observable } from 'rxjs';

describe('UsersService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ]
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should must return a observable', () => {
    expect(service.getUsers()).toBeInstanceOf(Observable);
  });

  it('should must return a observable', () => {
    expect(service.userExists('user')).toBeInstanceOf(Observable);
  });

});
