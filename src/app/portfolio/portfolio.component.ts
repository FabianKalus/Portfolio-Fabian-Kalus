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

  playVideo() {
    this.videoPlay = true;

    console.log(this.videoPlay)
  }
  


  pauseVideo(){
    this.videoPlay = false;
 
    console.log(this.videoPlay);
  }

 

}
