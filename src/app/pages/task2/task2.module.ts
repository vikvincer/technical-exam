import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Task2RoutingModule } from './task2-routing.module';
import { Task2Component } from './task2.component';
import { SectionTitleComponent } from 'src/app/common/components/section-title/section-title.component';
import { LinkButtonComponent } from 'src/app/common/components/link-button/link-button.component';
import { NavBarComponent } from 'src/app/common/components/nav-bar/nav-bar.component';
import { ContactUsFormComponent } from 'src/app/common/components/contact-us-form/contact-us-form.component';
import { SharedModule } from 'src/app/common/shared.module';


@NgModule({
  declarations: [
    Task2Component,
    SectionTitleComponent,
    LinkButtonComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    Task2RoutingModule,
    SharedModule
  ]
})
export class Task2Module { }
