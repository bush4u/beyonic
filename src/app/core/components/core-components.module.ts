import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatStyleModule } from 'src/app/shared/mat-style.module';
import { MobileNavComponent } from './mobile-nav/mobile-nav.component';
import { WebNavComponent } from './web-nav/web-nav.component';

const components = [MobileNavComponent, WebNavComponent]

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    MatStyleModule,
    RouterModule
  ],
  exports: components
})
export class CoreComponentsModule { }
