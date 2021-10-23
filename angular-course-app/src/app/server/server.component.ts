import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})

export class ServerComponent{
    //string interpolation
    serverId: number = 4;
    serverStatus: string = 'offline';
}