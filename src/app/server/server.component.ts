import {Component} from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  // styleUrls: ['./server.component.css']
  styles: [` .online {
    color: lightgray
  }`]
})
export class ServerComponent {

  serverId = 234228;
  serverStatus = 'Offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
  }

  getServerStatus() {

    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'Online' ? 'green' : 'red';
  }


}
