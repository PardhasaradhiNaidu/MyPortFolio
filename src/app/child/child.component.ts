import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'child-component',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  encapsulation: ViewEncapsulation.None,

})
export class ChildComponent implements OnInit {
  personName = '';
  comment = '';
  alertComment;
  startComment = true;
  spin;
  imgUrl;
  imgTrue;

  spinner() {
    this.certificate = true;
    console.log('spinner is called');

    this.spin = true;
    setTimeout(() => {
      this.spin = false;
    }, 1000)
  }

  description = 'Experience in Angular, HTML, CSS, JavaScript, TypeScript, BootStrap.';
  tableHead = ['Class', 'Percentage', 'College', 'Univercity', 'Year']
  educationArray = [
    { class: '10nth', persent: '90', college: 'Govt College', University: 'State Board', completed: 2011 },
    { class: 'Intermediate', persent: '75', college: 'Govt College', University: 'State Board', completed: 2013 },
    { class: 'BTech', persent: '65', college: 'Priyadarshini', University: 'JNTU A', completed: 2017 }]

  constructor(private apiService: ApiServiceService, private route: Router, private sanitizer : DomSanitizer) {

  }

  ngOnInit() {


    this.apiService.getApi().subscribe(res => {
      console.log('responce is', res)
    });
 let base64textString= localStorage.getItem('base64textString');
    this.imgUrl =this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64,${base64textString}`);
let one=+(localStorage.getItem('one'));
let two=+(localStorage.getItem('two'));
let three=+(localStorage.getItem('three'));
this.backcolor=document.getElementById('background').style.transition='2s';
this.backcolor=document.getElementById('background').style.backgroundColor=`rgb(${one},${two},${three})`;

  }
  commentValue;


  changed() {
    this.startComment = false;

  }


  label = false;
  education = false;
  workExperience = false;
  certificate = false;

  sendComment() {


    if (this.comment != '' && this.personName != '') {
      let postingData = { name: this.personName, comment: this.comment }
      this.apiService.postApi(postingData).subscribe(res => {
        console.log('post is', res);
        this.alertComment = true;
      })
    }

    setTimeout(() => {
      this.alertComment = false;

    }, 3000);
    this.comment = '';
  }



  userId;
  passWord;

  submitForm() {


    if (this.userId == 9959 && this.passWord == 13) {
      this.apiService.go = true;
      this.route.navigate(['another']);
    }

    else {
      console.log('else foundddddddddd');

      this.route.navigate(['child']);
      return alert('You are not authenticated User !');
    }

  }

backcolor;
  changeColor(){
this.backcolor=!this.backcolor;
// let no=1;

// let i=(Math.random());
// let b=i.toString()[2];
// alert(Math.random()*256|0);
// alert(Math.random()*256|0);

let one=Math.random()*256|0;
let two=Math.random()*256|0;
let three=Math.random()*256|0;
console.log(one,two,three);
localStorage.setItem('one',one.toString());
localStorage.setItem('two',two.toString());
localStorage.setItem('three',three.toString());
// this.ele.nativeElement.style.background=`rgb(${one},${two},${three})`;
this.backcolor=document.getElementById('background').style.backgroundColor=`rgb(${one},${two},${three})`;


  }



}
