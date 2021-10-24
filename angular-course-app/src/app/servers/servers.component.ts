import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]', select by attribute
  //selector: '.app-servers', select by class
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  //property binding
  allowNewServer: boolean = true;
  buttonStatus: string = "disabled: " + this.allowNewServer;

  //event binding
  createServer: string = "";
  serverName: string = "enter server name";

  //constructor is run when the component is created.
  constructor() { 
    setTimeout(()=> {
      this.allowNewServer = false;
      this.buttonStatus = "disabled: " + this.allowNewServer;
    }, 2000)
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.createServer = "Creating server...";
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
