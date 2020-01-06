import {Component} from "@angular/core";


@Component({
  selector: 'success',
  template: `<h3>You are Successful!!</h3>`,
  //styleUrls: ['./success.component.css']
  styles: [`
    h3 {
      padding: 20px;
      background-color: darkseagreen;
      border: 1px solid darkgreen;
    }

  `]
})
export class SuccessComponent {

}
