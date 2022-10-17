import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio-app';
  constructor(private router: Router) { }

  ngOnInit(){
    AOS.init();

    this.router.events.subscribe((event) => {
      if (!(event instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });
    }
}
