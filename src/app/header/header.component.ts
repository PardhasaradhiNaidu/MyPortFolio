import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  array = [1,2,5,4,8,2,5,6,4,2,5,2,3,3,2,8,6,4,5];




  dupAr = [];

  constructor(private http: HttpClient) { 

    
    
  }

  ngOnInit() {

    this.dupAr = this.array.filter((v, i) => {
      return this.array.indexOf(v) == i;
    });

    console.log('the dup is', this.dupAr);

    this.dupAr.sort();
    console.log('the sort is',  this.dupAr.sort((a,b)=>b-a));

    let ed=this.dupAr.reduce((a,b)=>a+b,0);
    console.log('the red is',ed);

   let z= this.array.filter((v,i,a)=>i);
   console.log(z);
   
    


  }

}
