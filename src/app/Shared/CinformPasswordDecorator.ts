import { AbstractControl, Validator } from '@angular/forms';



import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector:'[cinfirmPassword]'
})


export class CinfirmPasswordDecorator implements OnInit{
    constructor(private ele: ElementRef){

    }
ngOnInit(){
    let one=Math.random()*256|0;
    let two=Math.random()*256|0;
    let three=Math.random()*256|0;
    console.log(one,two,three)
this.ele.nativeElement.style.background=`rgb(${one},${two},${three})`;
}

}
