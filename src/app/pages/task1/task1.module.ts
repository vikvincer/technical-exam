import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Task1RoutingModule } from './task1-routing.module';
import { Task1Component } from './task1.component';
import { ContactUsFormComponent } from 'src/app/common/components/contact-us-form/contact-us-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SharedModule } from 'src/app/common/shared.module';


@NgModule({
  declarations: [Task1Component, LandingPageComponent],
  imports: [
    CommonModule,
    Task1RoutingModule,
    SharedModule
  ]
})
export class Task1Module { }
