import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }
  newsletterForm = new FormGroup({
    fullName: new FormControl('',[Validators.required]),
    emailAddress: new FormControl('', [Validators.required])
  })
  ngOnInit(): void {
  }

}
