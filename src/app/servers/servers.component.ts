import {Component, OnInit} from '@angular/core';
import {timestamp} from "rxjs";

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
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];
  showDetails = false;
  buttonClicks: any[] = [];


  constructor() {
    setTimeout(() => {
      this.allowingPushButton = true;
    }, 200);
  }

  ngOnInit() {
  }
sss
  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
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
  toggleDetails(): void
  {
    const timestamp = new Date().toLocaleString();
    this.buttonClicks.push({timestamp});
    this.showDetails = !this.showDetails;
  }

  userEmpty() {
    this.userName = "";
  }

  protected readonly onpageshow = onpageshow;
}
