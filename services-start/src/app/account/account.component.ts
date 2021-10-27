import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountsService } from '../services/account.service';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService] //use AppComponent AccountsService.
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private loggingService: LoggingService,
    private accountsService: AccountsService){}

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
    this.loggingService.logS(status);
  }
}
