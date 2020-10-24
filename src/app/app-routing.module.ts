import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {MainComponent} from './views/main/main.component';
import {PaymentComponent} from './views/payment/payment.component';
import {PaymentSuccessfulComponent} from './views/success/payment-successful.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'payment',
    component: PaymentComponent,
  },
  {
    path: 'payment-successful',
    component: PaymentSuccessfulComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
