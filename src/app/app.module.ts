import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStyleModule } from './shared/mat-style.module';
import { HttpClientModule } from '@angular/common/http';
import { CoreComponentsModule } from './core/components/core-components.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatStyleModule,
    HttpClientModule,
    CoreComponentsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
