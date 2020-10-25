import {Component, OnInit} from '@angular/core';
import {PaymentService} from '../../services/payment.service';
import {PaymentStatus} from '../../services/payment.models';
import { FormBuilder,  FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {tap} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';
import {RxwebValidators} from '@rxweb/reactive-form-validators';
import {minDateValidatorExtension} from '@rxweb/reactive-form-validators/validators-extension';
import {SessionStorageKeys} from '../../types';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  public form!: FormGroup;
  public currentDate: string = new Date().toISOString().split('T')[0];


  constructor(
    private paymentService: PaymentService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.createForm();
  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      creditCardNumber: [undefined, [Validators.required, Validators.pattern(regexValidator)]],
      cardholder: [undefined, Validators.required],
      expirationDate: [undefined, [Validators.required]],
      securityCode: [undefined, [Validators.minLength(3), Validators.maxLength(3) ]],
      amount: [undefined, [Validators.required, Validators.min(0)]]
    });
  }

  submit(): void {
    this.form.markAllAsTouched();

    if (!this.form.valid) {
       return;
    }
    const formValue = this.form.getRawValue();
    this.paymentService.performPayment(formValue).pipe(
      tap(response => {
        if (response.status === PaymentStatus.Success) {
          sessionStorage.setItem(SessionStorageKeys.LastTransaction, JSON.stringify(formValue));
          this.router.navigate(['/payment-successful']);
        } else {
          this.toastr.error(response.reason);
        }
      })
    ).subscribe();
  }
}

const regexValidator = `^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}(?:2131|1800|35\\d{3})\\d{11})$`;
