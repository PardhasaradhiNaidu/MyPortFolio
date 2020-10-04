import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ApiServiceService } from './api-service.service';
import { AnotherComponent } from './child/another/another.component';



//import { AppComponent } from './app.component';

const routes: Routes = [
  {path:'another',component:AnotherComponent,canActivate:[ApiServiceService]},

{path:'',component:ChildComponent},
{path:'child',component:ChildComponent},
{path:'**',component:AppComponent},



 // {path:'lazy',loadChildren: () => import(`./child/lazy.module`).then(m => m.LazyModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
