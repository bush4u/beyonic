import { Component, OnInit } from '@angular/core';
import { TRANSACTION_DATA } from 'src/app/core/mock-data/transactions.mockdata';
import { TransactionModel } from 'src/app/core/model/transaction.model';


@Component({
  selector: 'app-transaction-list-web',
  templateUrl: './transaction-list-web.component.html',
  styleUrls: ['./transaction-list-web.component.scss']
})
export class TransactionListWebComponent implements OnInit {

  displayedColumns: string[] = ['icon', 'name', 'amount', 'category', 'status', 'timeElapsed'];
  dataSource = TRANSACTION_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
