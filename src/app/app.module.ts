import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './views/main/main.component';
import { PaymentComponent } from './views/payment/payment.component';
import { PaymentSuccessfulComponent } from './views/success/payment-successful.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MainComponent,
    PaymentComponent,
    PaymentSuccessfulComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
