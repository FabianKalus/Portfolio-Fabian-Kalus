import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  german = true;
  
  constructor() { }

  ngOnInit(): void {  
    
  }

  changeLanguage(){
    if(this.german == true) {
      this.german = false
    }
    else {
      this.german = true;
    }
  }
}
