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
      const body = document.getElementsByTagName('body')[0];
      body.classList.add('modal-open');
    } else {
      this.showNavbar = false;
      const body = document.getElementsByTagName('body')[0];
   body.classList.remove('modal-open');
    }

  }
}
