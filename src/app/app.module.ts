
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { HttpClientModule, HttpClient, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { ApiServiceService } from './api-service.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AnotherComponent } from './child/another/another.component';
import { CinfirmPasswordDecorator } from './Shared/CinformPasswordDecorator';



@NgModule({
  declarations: [
 
    AppComponent,
 
    ChildComponent,
 
    HeaderComponent,
 
    FooterComponent,
 
    AnotherComponent,
    CinfirmPasswordDecorator
 

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
  HttpClientModule,
    RouterModule,
  

  ],
  providers: [

ApiServiceService


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
