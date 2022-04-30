import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Contact } from 'src/app/common/models/contact.model';
import { LocalService } from 'src/app/common/services/local.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  contactData$: Observable<Contact> = this.localService.getContactData();

  constructor(private localService: LocalService) { }

  ngOnInit(): void {
  }

}
