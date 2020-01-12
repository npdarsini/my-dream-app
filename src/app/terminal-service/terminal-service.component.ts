import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-terminal-service',
  // template: `<p>Using templates</p>
  // <h4>Trying multi lines in inlines </h4>`,
  templateUrl: './terminal-service.component.html',
  styleUrls: ['./terminal-service.component.css']
})
export class TerminalServiceComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No Server created';
  serverName = 'ServerName';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit() {
  }


  onCreateServer() {
    this.serverCreationStatus = this.serverName+' was created!!';
  }

  updateServerName(event: Event){
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }


}
