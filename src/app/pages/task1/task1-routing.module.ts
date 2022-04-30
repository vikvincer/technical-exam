import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { Task1Component } from './task1.component';

const routes: Routes = [
  {path: '', component: Task1Component},
  {path: 'landing', component: LandingPageComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Task1RoutingModule { }
