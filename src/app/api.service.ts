import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
	private SERVER_URL = "http://localhost:3000/";

    constructor(private httpClient: HttpClient) { }
    public fetchData(){  
		return this.httpClient.get('http://localhost:3000/users');  
	} 
	create(data): Observable<any> {
		return this.httpClient.post('http://localhost:3000/users', data);
	} 
	get(email): Observable<any>{
		
		return this.httpClient.get('http://localhost:3000/users?email=${email}');
		
	}
	public getUser(email, password){  
		return this.httpClient.get(`${this.SERVER_URL}users?email=${email}&password=${password}`); 
	}  

	
}
