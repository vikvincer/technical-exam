import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact } from '../../models/contact.model';


@Component({
  selector: 'app-contact-us-form',
  templateUrl: './contact-us-form.component.html',
  styleUrls: ['./contact-us-form.component.scss']
})
export class ContactUsFormComponent implements OnInit {

  @ViewChild('bookDate', { read: ElementRef }) bookDate: any;
  showBookDateCaret: boolean = true;

  @ViewChild('bookTime', { read: ElementRef }) bookTime: any;
  showBookTimeCaret:  boolean = true;

  @Input() hideReset: boolean = false;
  @Output() onSubmitData = new EventEmitter<Contact>();

  contactUsForm = new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    emailAddress: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl(''),
    bookingStatus: new FormControl(''),
    bookingDate: new FormControl('',  [Validators.required]),
    bookingTime: new FormControl('',  [Validators.required]),
    message: new FormControl('')
  });

  constructor() { }


  
  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.typeToggle();
  }

  typeToggle() {
    this.bookDate.nativeElement.addEventListener('focus', () => {
      this.bookDate.nativeElement.setAttribute('type', 'date')
      this.showBookDateCaret = false
    });
    this.bookDate.nativeElement.addEventListener('blur', () => {
      this.bookDate.nativeElement.setAttribute('type', 'text')
      this.showBookDateCaret = true
    });
    this.bookTime.nativeElement.addEventListener('focus', () => {
      this.bookTime.nativeElement.setAttribute('type', 'time')
      this.showBookTimeCaret = false;
    });
    this.bookTime.nativeElement.addEventListener('blur', () => {
      this.bookTime.nativeElement.setAttribute('type', 'text')
      this.showBookTimeCaret = true;
    });
  }

  onSubmit() {
    if (!this.contactUsForm.valid) return;
    this.onSubmitData.emit(this.contactUsForm.getRawValue())
  }
  
}
