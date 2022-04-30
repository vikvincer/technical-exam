import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  store$ = new BehaviorSubject<Contact>({});

  constructor() { }

  saveContactData(contact: Contact) {
    this.store$.next(contact);
  }

  getContactData(): Observable<Contact> {
    return this.store$;
  }

}
