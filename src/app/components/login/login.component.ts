import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { UserService } from 'src/app/services/user.service';
import { AuthenticationService } from '../../services/authentication.service'
import { ErrorService } from '../../services/error.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  form!: FormGroup; 

  constructor(
    private router: Router,
    private auth: AuthenticationService,
    private fb: FormBuilder,
    public error: ErrorService,
    public users: UserService
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', [Validators.required,]],
      password: ['', [Validators.required,Validators.minLength(4)]]
    })
  }

  onSubmit(){
    if (this.form.dirty && this.form.valid) {
      this.auth.login(this.form.value).subscribe(
        (r:any)=>{
          if (r.auth){          
            this.auth.setToken(r.token)
            this.router.navigate(['users'])
          }
          if(r.error){
            if(r.error.error == 'noMatch')
              this.form.controls['password'].setErrors({notMatch:'El Usuario y la contraseña no coinciden'});
            if(r.error.error == 'notFound')
              this.form.controls['username'].setErrors({notFound:'Usuario no existe'});
          } 
      })
    }
  }
}
