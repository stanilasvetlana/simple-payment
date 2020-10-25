export interface IPaymentRequestDto {
  creditCardNumber: string;
  cardholder: string;
  expirationDate: Date;
  securityCode?: string;
  amount: number;
}

export enum PaymentStatus {
  Success = 'Success',
  Error = 'Error'
}

export interface IPaymentResponseDto {
  status: PaymentStatus;
  reason?: string;
}
