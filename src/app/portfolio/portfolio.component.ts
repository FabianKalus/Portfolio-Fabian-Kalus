import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';



@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})


export class PortfolioComponent implements OnInit {
 

  constructor() { }

  ngOnInit(): void {
  }

  play: string = "play";
  videoPlay: boolean = false;

  elements: any[] = [
    {"name": "Ring of Fire", "img": "assets/img/portfolio/ringOfFire.png"},
    {"name": "Ring of Fire2", "img": "assets/img/portfolio/ringOfFire.png"},
    {"name": "Ring of Fire3", "img": "assets/img/portfolio/ringOfFire.png"},
  ]

  playVideo() {
    this.videoPlay = true;

    console.log(this.videoPlay)
  }
  


  pauseVideo(){
    this.videoPlay = false;
 
    console.log(this.videoPlay);
  }

  onMouseEnter(hoverName: HTMLElement) {
    hoverName.style.display = "none";
  }

  onMouseOut(hoverName: HTMLElement) {
    hoverName.style.display = "block";
  }

}
