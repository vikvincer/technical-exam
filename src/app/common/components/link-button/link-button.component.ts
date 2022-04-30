import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-link-button',
  templateUrl: './link-button.component.html',
  styleUrls: ['./link-button.component.scss']
})
export class LinkButtonComponent implements OnInit {

  @Input() config: {
    text?: string;
    type?: 'plain' | 'bordered' | 'icon',
    iconName?: string,
    imgSrc?: string;
    notClickable?: boolean;
  } = {
    type: 'plain',
    notClickable: true
  }

  constructor() { }

  ngOnInit(): void {
  }

}
