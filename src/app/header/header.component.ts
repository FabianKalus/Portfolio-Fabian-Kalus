import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showNavbar: boolean = false;

  @Input() german: boolean;
  @Output() newGerman = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  changeToGerman(){
    if(this.german == true) {
      this.german = false;
      this.newGerman.emit(this.german);
    }
    else {
      this.german = true;
      this.newGerman.emit(this.german);
    }
  }

  hideNavbar(){
    if(this.showNavbar == false) {
      this.showNavbar = true;
      const body = document.getElementsByTagName('body')[0];
      body.classList.add('modal-open');
      this.german = this.german;
    } else {
      this.showNavbar = false;
      const body = document.getElementsByTagName('body')[0];
   body.classList.remove('modal-open');
    }

  }
}
