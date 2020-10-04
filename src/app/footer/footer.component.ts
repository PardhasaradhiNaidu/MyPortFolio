import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, ElementRef } from '@angular/core';  
import * as jsPDF from 'jspdf';  
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  Data; 
constructor(private http:HttpClient){

  this.http.get('assets/loginData.json').subscribe(res=>{
    this.Data=res;
  })
}
 
  
  title = 'app';  

  
   @ViewChild('content',{static:true}) content: ElementRef;  
  public SavePDF(): void {  

  

    let content=this.content.nativeElement;  
    let doc = new jsPDF();  
    let _elementHandlers =  
    {  
      '#editor':function(element,renderer){  
        return true;  
      }  
    };  
    doc.fromHTML(content.innerHTML,15,15,{  
  
      'width':190,  
      'elementHandlers':_elementHandlers  
    });  
  
    doc.save('test.pdf');  
  }  
} 