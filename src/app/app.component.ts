import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Router, NavigationEnd } from '@angular/router';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent implements OnInit {
  title = 'portfolio-app';
  skillsActive: boolean = false;

 
  ngOnInit() {
    AOS.init();

  }
  
}
