import { Component, Input, OnInit } from '@angular/core';
import { AccountCardModel } from 'src/app/core/model/account-card.model';

@Component({
  selector: 'app-account-card',
  templateUrl: './account-card.component.html',
  styleUrls: ['./account-card.component.scss']
})
export class AccountCardComponent implements OnInit {
  @Input() data: AccountCardModel;

  constructor() { }

  ngOnInit(): void {
  }

}
