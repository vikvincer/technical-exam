import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/common/models/contact.model';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.scss']
})
export class Task2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  getData(data: Contact) {
    console.log({data})
  }
}
