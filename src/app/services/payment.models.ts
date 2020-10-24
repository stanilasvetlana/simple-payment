export interface IPaymentRequest {
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

export interface IPaymentResponse {
  status: PaymentStatus;
  reason?: string;
}
