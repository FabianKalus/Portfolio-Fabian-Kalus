import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showNavbar: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  hideNavbar(){
    if(this.showNavbar == false) {
      this.showNavbar = true;
    } else {
      this.showNavbar = false;
    }

  }
}
