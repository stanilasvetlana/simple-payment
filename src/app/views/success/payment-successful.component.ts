import {Component, OnDestroy, OnInit} from '@angular/core';
import {SessionStorageKeys} from '../../types';
import {Router} from '@angular/router';
import {IPaymentRequestDto, IPaymentResponseDto} from '../../services/payment.models';

@Component({
  selector: 'app-success',
  templateUrl: './payment-successful.component.html',
  styleUrls: ['./payment-successful.component.css']
})
export class PaymentSuccessfulComponent implements OnDestroy {
  transactionDetails?: IPaymentRequestDto;
  constructor(private router: Router) {
    const transactionString: string | null = sessionStorage.getItem(SessionStorageKeys.LastTransaction);

    if (!transactionString) {
      this.router.navigate(['/payment']);
      return;
    }

    this.transactionDetails = JSON.parse(transactionString);
  }

  ngOnDestroy(): void {
    sessionStorage.clear();
  }

}
