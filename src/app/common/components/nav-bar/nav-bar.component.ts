import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  isToggleActive: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    console.log('ffff')
    this.isToggleActive = this.isToggleActive ? false : true;
  }

}
