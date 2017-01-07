import { Component, OnInit, ViewChild } from '@angular/core';
import { MdSidenav } from '@angular2-material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  @ViewChild("start") sideNav: MdSidenav;

  constructor() { }

  ngOnInit() {
  }

}
