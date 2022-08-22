import { Component, OnInit } from '@angular/core';
import { TRANSACTION_DATA } from 'src/app/core/mock-data/transactions.mockdata';

@Component({
  selector: 'app-transaction-list-mobile',
  templateUrl: './transaction-list-mobile.component.html',
  styleUrls: ['./transaction-list-mobile.component.scss']
})
export class TransactionListMobileComponent implements OnInit {

  displayedColumns: string[] = ['icon', 'name', 'status', 'timeElapsed'];
  dataSource = TRANSACTION_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
