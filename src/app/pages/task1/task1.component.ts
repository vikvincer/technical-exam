import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/common/models/contact.model';
import { LocalService } from 'src/app/common/services/local.service';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.scss']
})
export class Task1Component implements OnInit {

  constructor(private localService: LocalService, private router: Router) { }

  ngOnInit(): void {
  }

  getData(data: Contact) {
    this.localService.saveContactData(data);
    this.router.navigate(['/task1/landing'])
  }
}
