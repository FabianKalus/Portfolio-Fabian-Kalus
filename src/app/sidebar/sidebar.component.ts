import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HostListener } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})


export class SidebarComponent implements OnInit {
  skillsActive: boolean = false;
  homeActive: boolean = true;
  portfolioActive: boolean = false;
  aboutActive: boolean = false;
  contactActive: boolean = false;

  @Input() german: boolean;
  @Output() newGerman = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  changeToGerman(){
    if(this.german == true) {
      this.german = false;
      this.newGerman .emit(this.german);
    }
    else {
      this.german = true;
      this.newGerman .emit(this.german);
    }
  }


  @HostListener('window:scroll', ['$event'])
  track(event) {
   if(window.scrollY < 300) {
    this.homeActive = true;
   } else {
    this.homeActive = false;
   }
   if(window.scrollY >= 300 && window.scrollY < 1000) {
    this.skillsActive = true;
   } else {
    this.skillsActive = false;
   }
   if(window.scrollY >= 1000 && window.scrollY < 2800) {
    this.portfolioActive = true;
   } else {
    this.portfolioActive = false;
   }
   if(window.scrollY >= 2800 && window.scrollY < 3600) {
    this.aboutActive = true;
   } else {
    this.aboutActive = false;
   }
   if(window.scrollY >= 3600) {
    this.contactActive = true;
   } else {
    this.contactActive = false;
   }
}

}
