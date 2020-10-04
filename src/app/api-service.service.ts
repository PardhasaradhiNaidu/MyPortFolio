import { Injectable, OnInit } from '@angular/core';

import { CanDeactivate, CanActivate, Router } from '@angular/router';

import { ChildComponent } from './child/child.component';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService implements CanActivate,OnInit{

private baseUrl='https://second-project-77500.firebaseio.com/.json';
sub=new Subject();
message=this.sub.asObservable();

  constructor(private http: HttpClient, private route: Router){}
  ngOnInit() {

    this.sub.next('hai pardha');
  
}

con(){
  return 87;
  setTimeout(() => {
  return Math.random();
    
  }, 0.5);
}


data;
  formData(data){
    
    this.data=data;
  }

  getApi(){
  return this.http.get(this.baseUrl);
  }

  postApi(sendingData){
   return this.http.post(this.baseUrl,sendingData);
  }
go;
  canActivate(){

if(this.go){
  return true;
}else{
  alert('You are not Authenticated User !')
  this.route.navigate(['child'])
}

   
  }

}
