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
      const body = document.getElementsByTagName('body')[0];
      body.classList.add('modal-open');
    } else {
      this.showNavbar = false;
      const body = document.getElementsByTagName('body')[0];
   body.classList.remove('modal-open');
    }

  }
}
