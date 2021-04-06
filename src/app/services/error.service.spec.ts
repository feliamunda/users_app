import { TestBed } from '@angular/core/testing';
import { AbstractControl, FormBuilder, FormControl, Validators } from '@angular/forms';

import { ErrorService } from './error.service';

describe('ErrorService', () => {
  let service: ErrorService;
  let fb : FormBuilder;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers : [ FormBuilder ]
    });
    service = TestBed.inject(ErrorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('should return a String', () => {
    let control = new FormControl
    expect(service.getControlErrorMsg(control)).toBeInstanceOf(String)
  });
  
  it('should return Error', () => {
    let control = new FormControl()
    control.setErrors({invalid:'invalid'})    
    expect(service.getControlErrorMsg(control)).toBe('Error')
  });
});
