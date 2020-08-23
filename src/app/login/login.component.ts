import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	loginForm: FormGroup;
  emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
   users = [];
   currentuser=null;
   showcontent1=true;
   showcontent2=false;
   displayedColumns: string[] = ['Field', 'Value'];
   dataSource;
   

  constructor(
    private formBuilder: FormBuilder, private apiService: ApiService
  ) { }

  ngOnInit() {
	  
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.pattern(this.emailRegx)]],
      password: [null, Validators.required]
    });
  }

  submit() {
    if (!this.loginForm.valid) {
      return;
    }
   
      this.apiService.getUser(this.loginForm.value.email).subscribe((data: any[])=>{  
			
			this.users = data; 
			this.dataSource=this.users[0];
		})  
		this.showcontent1=false;
		this.showcontent2=true;
	
  }
  
   
  }
  

 

