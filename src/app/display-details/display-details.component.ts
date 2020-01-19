import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent implements OnInit {

  buttonEventList = [] ;
  i =0;
  show = false;

  displayDetails = "Show Me";

  constructor() {
  }

  ngOnInit() {
  }

  onClick() {
    // let x = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
    // console.log("x is :", x);
    // this.displayDetails = this.displayDetailsList[x];
    this.show = !this.show;
    this.buttonEventList.push(this.i++);

  }

  getColor (buttonVar) {
    return buttonVar > 5 ? "blue" : "white";
  }

}
