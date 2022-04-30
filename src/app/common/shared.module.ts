import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {MatIconModule} from '@angular/material/icon';
import { ContactUsFormComponent } from "./components/contact-us-form/contact-us-form.component";
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
    declarations: [ContactUsFormComponent, FooterComponent],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
        HttpClientModule
    ],
    exports: [
        ContactUsFormComponent,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
        HttpClientModule,
        FooterComponent
    ]
})

export class SharedModule {}