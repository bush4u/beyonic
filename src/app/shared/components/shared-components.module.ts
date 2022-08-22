import { TransactionListWebComponent } from './transaction-list/transaction-list-web/transaction-list-web.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuickActionsComponent } from './quick-actions/quick-actions.component';
import { IconPlaceholderComponent } from './icon-placeholder/icon-placeholder.component';
import { MatStyleModule } from '../mat-style.module';
import { RouterModule } from '@angular/router';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { AccountCardComponent } from './account-card/account-card.component';
import { TransactionListMobileComponent } from './transaction-list/transaction-list-mobile/transaction-list-mobile.component';

const components = [
  QuickActionsComponent,
  IconPlaceholderComponent,
  TransactionListComponent,
  AccountCardComponent,
  TransactionListWebComponent,
  TransactionListMobileComponent
]

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    MatStyleModule,
    RouterModule,
  ],
  exports: components
})
export class SharedComponentsModule { }
