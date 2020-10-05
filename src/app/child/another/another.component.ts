import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-another',
  templateUrl: './another.component.html',
  styleUrls: ['./another.component.css']
})
export class AnotherComponent implements OnInit {


  base64textString;
  imageSource;
  ngOnInit(){
  this.api.getApi().subscribe(get=>{
    console.log('getting is ',get);
    let array=[];
    let filter=get['-MIEtdm04TDszgL6gpU_'];
    array.push(get);
    console.log('filter is',array);
    console.log('final arra is',array[0]);
   
    
    
  })
  }

constructor(private api:ApiServiceService, private sanitizer: DomSanitizer){}



onFileChanged(evt){
  var files = evt.target.files;
  console.log('the event is',evt)
  var file = files[0];

if (files && file) {
    var reader = new FileReader();

    reader.onload =this._handleReaderLoaded.bind(this);

    reader.readAsBinaryString(file);
}
}



_handleReaderLoaded(readerEvt) {
 var binaryString = readerEvt.target.result;
        this.base64textString= btoa(binaryString);
        console.log(btoa(binaryString));
       
}

sendApi(){
  let data={name:'pardha',age:'24',work: 'developer',base64:this.base64textString};
  this.api.postApi(data).subscribe(res=>{
    console.log('the senidng is ',res);
    this.imageSource = this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64,${this.base64textString}`);
    console.log('the image url is',this.imageSource);
    localStorage.setItem('base64textString',this.base64textString)
    
  })
}
}
