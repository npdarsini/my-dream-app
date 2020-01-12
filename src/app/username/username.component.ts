import {Component} from "@angular/core";


@Component({
  selector: "app-username",
  templateUrl: "./username.component.html",
  styleUrls: ['./username.component.css']
})
export class UsernameComponent {
  userNameVar = '';
 // isDisabled = true;

  resetUserName(){
    this.userNameVar = '';
  }

  isDisabled(){
    if(this.userNameVar == ''){
      return true;
    } else {
      return false;
    }

  }
}
