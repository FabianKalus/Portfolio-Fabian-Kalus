import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  mainGerman = true;
  constructor() { }

  ngOnInit(): void {
  }

  addGerman(newGerman: boolean){
    this.mainGerman = newGerman;
  }

}
