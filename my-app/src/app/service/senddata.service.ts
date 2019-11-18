import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { HttpClient ,HttpHeaders } from '@angular/common/http';


// import { User } from  '../components/signup/signup.component';
// import { JwtResponse } from  '../components/signup/signup.component'; 
 
@Injectable({
  providedIn: 'root'
})
export class SenddataService {
  constructor(private http: HttpClient) { }
  getAllUsers(): Observable<any>{
    return this.http.get<any>('http://192.168.1.190:3000/todos/');
  }

  saveUser( user: any ) : Observable<any>{
     return this.http.post<any>('http://192.168.1.190:3000/todos/add', user);
  }
  deleteUser(id: number){
    return this.http.delete('http://192.168.1.190:3000/todos/'+id);
  }
  showTodayDate() { 
    let ndate = new Date(); 
    return ndate; 
 }  

  
}
