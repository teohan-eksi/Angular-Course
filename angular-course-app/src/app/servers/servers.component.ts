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

  //constructor is run when the component is created.
  constructor() { 
    setTimeout(()=> {
      this.allowNewServer = false;
    }, 2000)
  }

  ngOnInit(): void {
  }

}
