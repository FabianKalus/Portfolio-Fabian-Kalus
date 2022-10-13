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

  bla(){
    alert('asdf')
  }


  playVideo(x) {
   
    this.videoNumber = x;
    this.videoPlay = false;
 
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
