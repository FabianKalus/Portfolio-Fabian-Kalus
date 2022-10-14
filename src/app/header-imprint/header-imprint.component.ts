import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-imprint',
  templateUrl: './header-imprint.component.html',
  styleUrls: ['./header-imprint.component.scss']
})
export class HeaderImprintComponent implements OnInit {

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
