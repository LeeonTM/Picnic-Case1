import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Email1Component } from './email1/email1.component';
import { Email2Component } from './email2/email2.component';
import { OnePageComponent } from './one-page/one-page.component';

const routes: Routes = [ 
  { path: "email1", component: Email1Component },
  { path: "email2", component: Email2Component },
  { path: "onepage", component: OnePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
