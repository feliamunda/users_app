import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

  handleError<T>() {
    return (error: any): Observable<T> => {
      return of(error as T);
    };
  }

  getControlErrorMsg(control:AbstractControl){    
    if (control.hasError('required')) {
      return 'Campo necesario';
    }
    if (control.hasError('minlength')) {
      return `La longitud mínima es de ${control.errors?.minlength.requiredLength}` ;
    }
    if (control.hasError('maxlength')) {
      return `La longitud máxima es de ${control.errors?.maxlength.requiredLength}`;
    }
    if (control.hasError('incorrect')) {
      return 'El usuario o la contraseña no coinciden';
    }
    if (control.hasError('notFound')) {
      return 'El usuario no existe';
    }
    if (control.hasError('notMatch')) {
      return 'El nombre de usuario y la contraseña no coinciden';
    }
    if (control.hasError('pattern')) {
      return 'Formato ínvalido';
    }
    if (control.hasError('min')) {
      return 'No alcanza el límite mínimo';
    }
    if (control.hasError('min')) {
      return 'Sobrepasa el límite máximo';
    }     
    return 'Error'     
  }
}
