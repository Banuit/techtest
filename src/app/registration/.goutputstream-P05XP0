import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ConfirmedValidator } from './confirmed.validator';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;
  emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
  mobileRegx = /^((\+){1}91){1}[1-9]{1}[0-9]{9}$/;
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      fname: [null, Validators.required],
      lname: [null, Validators.required],
      email: [null, [Validators.required, Validators.pattern(this.emailRegx)]],
      mobile: [null, [Validators.required, Validators.pattern(this.mobileRegx)]],
      gender: [null, [Validators.required]],
      address: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      confirmpassword:[null, [Validators.required]]
      
    }, { 
      validator: ConfirmedValidator('password', 'confirmpassword')
    })
  }
  get f(){
    return this.registerForm.controls;
  }
  submit() {
    if (!this.registerForm.valid) {
      return;
    }
    console.log(this.registerForm.value);
  }
}
