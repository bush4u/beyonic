import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MatStyleModule } from 'src/app/shared/mat-style.module';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatStyleModule,
    SharedComponentsModule,
    CarouselModule,
    IconModule
  ]
})
export class DashboardModule { }
