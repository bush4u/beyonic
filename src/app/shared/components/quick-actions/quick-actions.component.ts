import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quick-actions',
  templateUrl: './quick-actions.component.html',
  styleUrls: ['./quick-actions.component.scss']
})
export class QuickActionsComponent implements OnInit {

  channels: any[] = [
    { title: 'Top Up', icon: 'billing', route: '/transaction/topup' },
    { title: 'Send Money', icon: 'arrow-top-right', route: '/transaction/send-money' },
    { title: 'Collect', icon: 'arrow-down-right', route: '/transaction/collect' },
    { title: 'Withdraw', icon: 'download', route: '/transaction/withdraw' },];

  constructor() { }

  ngOnInit(): void {
  }

}
