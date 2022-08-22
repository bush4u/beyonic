import { Component, OnInit } from '@angular/core';
import { PRIMARY_NAVIGATION } from '../../contansts/primary-navigation.constant';

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.scss']
})
export class MobileNavComponent implements OnInit {
  mobileNavigationData = [...PRIMARY_NAVIGATION].filter(item => item.mobileEnabled);

  constructor() { }

  ngOnInit(): void {
  }

}
