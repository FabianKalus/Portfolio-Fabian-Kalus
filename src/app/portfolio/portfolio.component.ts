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
  imgNumber: number = 0;
  videoNumber: number = 0;

  elements: any[] = [
    {"name": "Ring of Fire", "img": "assets/img/portfolio/ringOfFire.png"},
    {"name": "Ring of Fire2", "img": "assets/img/portfolio/ringOfFire.png"},
    {"name": "Ring of Fire3", "img": "assets/img/portfolio/ringOfFire.png"},
  ]

  playVideo(x) {
    this.videoPlay = true;
    this.videoNumber = x;

  }
  
  scaleImg(x) {
    this.imgNumber = x;
  }


  pauseVideo(){
    this.videoPlay = false;
    this.imgNumber = 0;
    this.videoNumber = 0;
  }

 
}
