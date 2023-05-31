import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowingPushButton = false;
  allowingResetButton = false;
  serverCreationStatus = 'No server was created';
  serverName = "TestServer";
  userName = " Florina";

  constructor() {
    setTimeout(() => {
      this.allowingPushButton = true;
    }, 200);
  }

  ngOnInit() {
  }
sss
  onCreateServer() {
    this.serverCreationStatus = 'Server was created!' + ' ' + 'Name is ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onUpdateUsername(event: any) {
    this.userName = (<HTMLInputElement>event.target).value;
  }

  onNotEmpty(): boolean {
    return this.userName.trim().length == 0;
  }

  userEmpty() {
    this.userName = "";
  }
}
