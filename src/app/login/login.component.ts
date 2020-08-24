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
   validateemail=false;
   showcontent3=true;

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
   
      this.apiService.getUser(this.loginForm.value.email, this.loginForm.value.password).subscribe((data: any[])=>{  
			
			this.users = data; 
			this.dataSource=this.users[0];
			
		})  
		
		
		if(this.users[0] == undefined || this.users[0].length == 0)
		{
			this.validateemail=true;
		}
		else
		{
			this.showcontent1=false;
			this.showcontent2=true;
			this.validateemail=false;
			this.showcontent3=false;
			
		}
	
  }
  
   
  }
  

 

