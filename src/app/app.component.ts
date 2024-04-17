import { Component, OnInit } from '@angular/core';
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // Arguments
  accounts: { name: string; status: string }[] = [];

  // Constructor
  constructor(private AccountsService: AccountsService) {}

  // Hooks
  ngOnInit(): void {
    this.accounts = this.AccountsService.accounts;
  }
}
