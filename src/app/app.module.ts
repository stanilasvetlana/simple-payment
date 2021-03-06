import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './views/main/main.component';
import { PaymentComponent } from './views/payment/payment.component';
import { PaymentSuccessfulComponent } from './views/success/payment-successful.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

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
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({}),
    RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
