import { Component, OnInit } from '@angular/core';
import { PRIMARY_NAVIGATION, SUPPORT_NAVIGATION } from '../../contansts/primary-navigation.constant';

@Component({
  selector: 'app-web-nav',
  templateUrl: './web-nav.component.html',
  styleUrls: ['./web-nav.component.scss']
})
export class WebNavComponent implements OnInit {
  navigationData = PRIMARY_NAVIGATION;
  supportData = SUPPORT_NAVIGATION;

  constructor() { }

  ngOnInit(): void {
  }

}
