import { Component, Input, inject } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService],
})
export class AccountComponent {
  // Arguments
  @Input() account: { name: string; status: string };
  @Input() id: number;
  private loggingService?: LoggingService;

  // Constructor
  constructor(private accountsService: AccountsService) {
    this.loggingService = inject(LoggingService);
  }

  // Methods
  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
    // this.loggingService.logStatusChange(status);
    this.accountsService.statusUpdated.emit(status);
  }
}
