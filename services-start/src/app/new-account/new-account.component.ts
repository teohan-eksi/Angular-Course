import { Component } from '@angular/core';
import { AccountsService } from '../services/account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
  //providers: [] //using AppComponent AccountsService 
})
export class NewAccountComponent {

  constructor(private accountsService: AccountsService){
    this.accountsService.statusUpdated.subscribe((status: string)=>{
      console.log("NewAccount: " + status);
      
    });
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
  }
}
