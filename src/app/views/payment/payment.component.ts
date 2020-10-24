import {Component} from '@angular/core';
import {PaymentService} from '../../services/payment.service';
import {PaymentStatus} from '../../services/payment.models';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {tap} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  public form!: FormGroup;

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
      cardholder: [undefined],
      expirationDate: [undefined],
      securityCode: [undefined],
      amount: [undefined]
    });
  }

  submit(): void {
    console.log(this.form.controls.creditCardNumber);
    console.log(this.form.getRawValue());

    this.form.markAllAsTouched();

    // if (!this.form.valid) {
    //   return;
    // }
    this.paymentService.performPayment(this.form.getRawValue()).pipe(
      tap(response => {
        if (response.status === PaymentStatus.Success) {
          this.router.navigate(['/payment-successful']);
        } else {
          this.toastr.error(response.reason);
        }
      })
    ).subscribe();
  }

  shouldDisplayErrorForControl(controlName: string): boolean {
    const control: AbstractControl | null = this.form.get(controlName);

    if (!control) {
      throw Error('Invalid control name');
    }
    return control.dirty && control.invalid || control.touched;
  }
}


const regexValidator = `^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}(?:2131|1800|35\\d{3})\\d{11})$`;
