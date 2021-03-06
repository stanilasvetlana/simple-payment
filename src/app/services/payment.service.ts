import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {IPaymentRequestDto, IPaymentResponseDto} from './payment.models';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private httpClient: HttpClient) {
  }

  public performPayment(payload: IPaymentRequestDto): Observable<IPaymentResponseDto> {
    // return of({
    //   status: Math.random() > 0.5 ? PaymentStatus.Error : PaymentStatus.Success,
    //   reason: 'Insert reasons'
    // });
    const apiUrl = 'https://run.mocky.io/v3/d0e54783-7dfe-4077-8953-312e6f319433';
    return this.httpClient.post<IPaymentResponseDto>(apiUrl, payload);
  }
}
